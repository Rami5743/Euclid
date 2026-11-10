const SVG_NS = 'http://www.w3.org/2000/svg'

export interface RectOptions {
  /** cells across and up */
  cols: number
  rows: number
  /** the corner moves on the diagonal, so the shape stays a square */
  square?: boolean
}

export interface RectHandle {
  get: () => { w: number; h: number }
  set: (size: { w: number; h: number }) => void
}

export interface RectBoard {
  el: HTMLElement
  corner: (initial: { w: number; h: number }, onChange: (size: { w: number; h: number }) => void) => RectHandle
  /** the number to reach, shown in the corner of the board */
  goal: (text: string) => void
  /** a strip of cells, to show one factor */
  strip: (w: number, h: number) => void
  clearHints: () => void
  destroy: () => void
}

const W = 820
const H = 620
const PAD = 70

function svg<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string> = {}): SVGElementTagNameMap[K] {
  const node = document.createElementNS(SVG_NS, tag)
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v)
  return node
}

export function rectBoard(options: RectOptions): RectBoard {
  const { cols, rows, square = false } = options
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap'
  const root = svg('svg', { class: 'board rect-board', viewBox: `0 0 ${W} ${H}` })
  wrap.append(root)

  const hintLayer = svg('g', { class: 'hints' })
  const mainLayer = svg('g', { class: 'main' })
  const dragLayer = svg('g', { class: 'drag' })
  root.append(mainLayer, hintLayer, dragLayer)

  const unit = Math.min((W - 2 * PAD) / cols, (H - 2 * PAD) / rows)
  const x0 = PAD
  const y0 = H - PAD
  const xOf = (c: number): number => x0 + c * unit
  const yOf = (r: number): number => y0 - r * unit

  for (let c = 0; c <= cols; c++) {
    mainLayer.append(svg('line', { class: 'cell-line', x1: xOf(c).toFixed(1), y1: yOf(0).toFixed(1), x2: xOf(c).toFixed(1), y2: yOf(rows).toFixed(1) }))
  }
  for (let r = 0; r <= rows; r++) {
    mainLayer.append(svg('line', { class: 'cell-line', x1: xOf(0).toFixed(1), y1: yOf(r).toFixed(1), x2: xOf(cols).toFixed(1), y2: yOf(r).toFixed(1) }))
  }

  const goalText = svg('text', { class: 'goal', x: String(W - 30), y: '58', 'text-anchor': 'end' })
  mainLayer.append(goalText)

  const cleanups: Array<() => void> = []

  const board: RectBoard = {
    el: wrap,

    corner(initial, onChange) {
      let size = { ...initial }
      const rect = svg('rect', { class: 'area-rect' })
      const handle = svg('circle', { class: 'area-handle', r: '20' })
      // The running product sits in the corner of the board, where it never
      // collides with a small rectangle or with the side labels.
      const area = svg('text', { class: 'area-text', x: '30', y: '58', 'text-anchor': 'start' })
      const wLabel = svg('text', { class: 'side-label', 'text-anchor': 'middle' })
      const hLabel = svg('text', { class: 'side-label', 'text-anchor': 'middle' })
      dragLayer.append(rect, wLabel, hLabel, area, handle)

      const place = (): void => {
        rect.setAttribute('x', xOf(0).toFixed(1))
        rect.setAttribute('y', yOf(size.h).toFixed(1))
        rect.setAttribute('width', (size.w * unit).toFixed(1))
        rect.setAttribute('height', (size.h * unit).toFixed(1))
        handle.setAttribute('cx', xOf(size.w).toFixed(1))
        handle.setAttribute('cy', yOf(size.h).toFixed(1))
        area.textContent = `${size.w} × ${size.h} = ${size.w * size.h}`
        wLabel.setAttribute('x', xOf(size.w / 2).toFixed(1))
        wLabel.setAttribute('y', (yOf(0) + 44).toFixed(1))
        wLabel.textContent = String(size.w)
        hLabel.setAttribute('x', (xOf(0) - 32).toFixed(1))
        hLabel.setAttribute('y', (yOf(size.h / 2) + 10).toFixed(1))
        hLabel.textContent = String(size.h)
      }
      place()

      const toSize = (event: PointerEvent): { w: number; h: number } => {
        const ctm = root.getScreenCTM()
        if (!ctm) return size
        const p = new DOMPoint(event.clientX, event.clientY).matrixTransform(ctm.inverse())
        let w = Math.round((p.x - x0) / unit)
        let h = Math.round((y0 - p.y) / unit)
        if (square) { const s = Math.max(w, h); w = s; h = s }
        return {
          w: Math.max(1, Math.min(cols, w)),
          h: Math.max(1, Math.min(rows, h)),
        }
      }

      let dragging = false
      const down = (e: PointerEvent): void => { dragging = true; handle.setPointerCapture(e.pointerId); e.preventDefault() }
      const move = (e: PointerEvent): void => {
        if (!dragging) return
        size = toSize(e)
        place()
        onChange(size)
      }
      const up = (): void => { dragging = false }
      handle.addEventListener('pointerdown', down)
      handle.addEventListener('pointermove', move)
      handle.addEventListener('pointerup', up)
      handle.addEventListener('pointercancel', up)
      const tap = (e: PointerEvent): void => {
        if (e.target === handle) return
        size = toSize(e)
        place()
        onChange(size)
      }
      root.addEventListener('pointerdown', tap)
      cleanups.push(() => {
        handle.removeEventListener('pointerdown', down)
        handle.removeEventListener('pointermove', move)
        handle.removeEventListener('pointerup', up)
        handle.removeEventListener('pointercancel', up)
        root.removeEventListener('pointerdown', tap)
      })

      return { get: () => size, set: (s) => { size = { ...s }; place(); onChange(size) } }
    },

    goal(text) { goalText.textContent = text },

    strip(w, h) {
      hintLayer.append(svg('rect', {
        class: 'hint-strip',
        x: xOf(0).toFixed(1), y: yOf(h).toFixed(1),
        width: (w * unit).toFixed(1), height: (h * unit).toFixed(1),
      }))
    },

    clearHints() { hintLayer.replaceChildren() },

    destroy() {
      for (const fn of cleanups) fn()
      wrap.remove()
    },
  }

  return board
}
