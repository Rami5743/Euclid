const SVG_NS = 'http://www.w3.org/2000/svg'

export interface AngleHandle {
  get: () => number
  set: (degrees: number) => void
}

export interface AngleBoard {
  el: HTMLElement
  /** draw into the figure on the left */
  line: (x1: number, y1: number, x2: number, y2: number, cls?: string) => SVGLineElement
  ray: (cx: number, cy: number, degrees: number, length: number, cls?: string) => SVGLineElement
  arc: (cx: number, cy: number, radius: number, from: number, to: number, cls?: string) => SVGPathElement
  label: (x: number, y: number, text: string, cls?: string) => SVGTextElement
  dot: (x: number, y: number, cls?: string) => SVGCircleElement
  /** the dial on the right, where the answer is set */
  dial: (initial: number, onChange: (degrees: number) => void) => AngleHandle
  mark: (text: string) => void
  clearHints: () => void
  destroy: () => void
}

const W = 1000
const H = 560
const DIAL = { x: 760, y: 320, r: 170 }

function svg<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string> = {}): SVGElementTagNameMap[K] {
  const node = document.createElementNS(SVG_NS, tag)
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v)
  return node
}

const rad = (deg: number): number => (deg * Math.PI) / 180

export function pointOn(cx: number, cy: number, degrees: number, length: number): { x: number; y: number } {
  return { x: cx + Math.cos(rad(degrees)) * length, y: cy - Math.sin(rad(degrees)) * length }
}

export function arcPath(cx: number, cy: number, radius: number, from: number, to: number): string {
  const a = pointOn(cx, cy, from, radius)
  const b = pointOn(cx, cy, to, radius)
  const large = Math.abs(to - from) > 180 ? 1 : 0
  const sweep = to > from ? 0 : 1
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} A${radius} ${radius} 0 ${large} ${sweep} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
}

export function angleBoard(): AngleBoard {
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap'
  const root = svg('svg', { class: 'board angle-board', viewBox: `0 0 ${W} ${H}` })
  wrap.append(root)

  const figureLayer = svg('g', { class: 'figure' })
  const hintLayer = svg('g', { class: 'hints' })
  const dialLayer = svg('g', { class: 'dial' })
  root.append(figureLayer, hintLayer, dialLayer)

  const markEl = svg('text', { class: 'board-mark', x: '40', y: '56' })
  root.append(markEl)

  const cleanups: Array<() => void> = []

  const board: AngleBoard = {
    el: wrap,

    line(x1, y1, x2, y2, cls = '') {
      const node = svg('line', { class: `fig-line ${cls}`, x1: String(x1), y1: String(y1), x2: String(x2), y2: String(y2) })
      figureLayer.append(node)
      return node
    },

    ray(cx, cy, degrees, length, cls = '') {
      const end = pointOn(cx, cy, degrees, length)
      return board.line(cx, cy, end.x, end.y, cls)
    },

    arc(cx, cy, radius, from, to, cls = '') {
      const node = svg('path', { class: `fig-arc ${cls}`, d: arcPath(cx, cy, radius, from, to) })
      figureLayer.append(node)
      return node
    },

    label(x, y, text, cls = '') {
      const node = svg('text', { class: `fig-label ${cls}`, x: String(x), y: String(y), 'text-anchor': 'middle' })
      node.textContent = text
      figureLayer.append(node)
      return node
    },

    dot(x, y, cls = '') {
      const node = svg('circle', { class: `fig-dot ${cls}`, cx: String(x), cy: String(y), r: '7' })
      figureLayer.append(node)
      return node
    },

    dial(initial, onChange) {
      let degrees = Math.round(initial)
      const base = svg('circle', { class: 'dial-face', cx: String(DIAL.x), cy: String(DIAL.y), r: String(DIAL.r) })
      const baseRay = svg('line', {
        class: 'dial-base', x1: String(DIAL.x), y1: String(DIAL.y),
        x2: String(DIAL.x + DIAL.r), y2: String(DIAL.y),
      })
      const arm = svg('line', { class: 'dial-arm' })
      const wedge = svg('path', { class: 'dial-wedge' })
      const knob = svg('circle', { class: 'dial-knob', r: '18' })
      const readout = svg('text', { class: 'dial-readout', x: String(DIAL.x), y: String(DIAL.y + 72), 'text-anchor': 'middle' })
      dialLayer.append(base, wedge, baseRay, arm, knob, readout)

      for (let tick = 0; tick <= 180; tick += 10) {
        const outer = pointOn(DIAL.x, DIAL.y, tick, DIAL.r)
        const inner = pointOn(DIAL.x, DIAL.y, tick, DIAL.r - (tick % 30 === 0 ? 22 : 12))
        dialLayer.append(svg('line', {
          class: 'dial-tick',
          x1: inner.x.toFixed(1), y1: inner.y.toFixed(1), x2: outer.x.toFixed(1), y2: outer.y.toFixed(1),
        }))
      }

      const place = (): void => {
        const end = pointOn(DIAL.x, DIAL.y, degrees, DIAL.r)
        arm.setAttribute('x1', String(DIAL.x))
        arm.setAttribute('y1', String(DIAL.y))
        arm.setAttribute('x2', end.x.toFixed(1))
        arm.setAttribute('y2', end.y.toFixed(1))
        knob.setAttribute('cx', end.x.toFixed(1))
        knob.setAttribute('cy', end.y.toFixed(1))
        wedge.setAttribute('d',
          `M${DIAL.x} ${DIAL.y} L${DIAL.x + DIAL.r} ${DIAL.y} ${arcPath(DIAL.x, DIAL.y, DIAL.r, 0, degrees).slice(1)} Z`)
        readout.textContent = `${degrees}°`
      }
      place()

      const toDegrees = (event: PointerEvent): number => {
        const ctm = root.getScreenCTM()
        if (!ctm) return degrees
        const p = new DOMPoint(event.clientX, event.clientY).matrixTransform(ctm.inverse())
        const value = Math.round((Math.atan2(DIAL.y - p.y, p.x - DIAL.x) * 180) / Math.PI)
        return Math.max(0, Math.min(180, value))
      }

      let dragging = false
      const down = (e: PointerEvent): void => { dragging = true; root.setPointerCapture(e.pointerId); degrees = toDegrees(e); place(); onChange(degrees); e.preventDefault() }
      const move = (e: PointerEvent): void => { if (!dragging) return; degrees = toDegrees(e); place(); onChange(degrees) }
      const up = (): void => { dragging = false }
      root.addEventListener('pointerdown', down)
      root.addEventListener('pointermove', move)
      root.addEventListener('pointerup', up)
      root.addEventListener('pointercancel', up)
      cleanups.push(() => {
        root.removeEventListener('pointerdown', down)
        root.removeEventListener('pointermove', move)
        root.removeEventListener('pointerup', up)
        root.removeEventListener('pointercancel', up)
      })

      return { get: () => degrees, set: (d) => { degrees = Math.round(d); place(); onChange(degrees) } }
    },

    mark(text) { markEl.textContent = text },

    clearHints() { hintLayer.replaceChildren() },

    destroy() {
      for (const fn of cleanups) fn()
      wrap.remove()
    },
  }

  return board
}
