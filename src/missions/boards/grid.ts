const SVG_NS = 'http://www.w3.org/2000/svg'

export interface GridOptions {
  /** the grid runs from -range to range on both axes */
  range: number
}

export interface Point { x: number; y: number }

export interface GridHandle {
  get: () => Point
  set: (p: Point) => void
}

export interface GridBoard {
  el: HTMLElement
  xOf: (x: number) => number
  yOf: (y: number) => number
  /** a dot the player puts down by tapping the grid */
  pick: (onChange: (p: Point) => void) => GridHandle
  /** a shape drawn on the grid */
  shape: (points: Point[], cls?: string) => SVGPolygonElement
  /** a shape the player drags about, snapped to the lattice */
  dragShape: (points: Point[], at: Point, onChange: (p: Point) => void) => GridHandle
  /** a figure standing on an axis, pointing along its line */
  scout: (value: number, axis: 'x' | 'y') => void
  /** the line a scout stands on */
  guide: (value: number, axis: 'x' | 'y') => void
  /** one axis drawn thick, for a mirror */
  mirrorAxis: (axis: 'x' | 'y') => void
  /** the distance of a point from an axis, with its size written on it */
  span: (from: Point, to: Point, label: string) => void
  dot: (p: Point, cls?: string) => void
  /** the graph of a function over the whole width */
  curve: (fn: (x: number) => number, cls?: string) => SVGPolylineElement
  clearHints: () => void
  destroy: () => void
}

const SIZE = 720
const PAD = 40

function svg<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string> = {}): SVGElementTagNameMap[K] {
  const node = document.createElementNS(SVG_NS, tag)
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v)
  return node
}

export function grid(options: GridOptions): GridBoard {
  const { range } = options
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap'
  const root = svg('svg', { class: 'board grid-board', viewBox: `0 0 ${SIZE} ${SIZE}` })
  wrap.append(root)

  const hintLayer = svg('g', { class: 'hints' })
  const mainLayer = svg('g', { class: 'main' })
  const dragLayer = svg('g', { class: 'drag' })
  root.append(hintLayer, mainLayer, dragLayer)

  const unit = (SIZE - 2 * PAD) / (2 * range)
  const xOf = (x: number): number => SIZE / 2 + x * unit
  const yOf = (y: number): number => SIZE / 2 - y * unit
  const snap = (sx: number, sy: number): Point => ({
    x: Math.max(-range, Math.min(range, Math.round((sx - SIZE / 2) / unit))),
    y: Math.max(-range, Math.min(range, Math.round((SIZE / 2 - sy) / unit))),
  })

  for (let i = -range; i <= range; i++) {
    mainLayer.append(svg('line', { class: 'grid-line', x1: String(PAD), y1: yOf(i).toFixed(1), x2: String(SIZE - PAD), y2: yOf(i).toFixed(1) }))
    mainLayer.append(svg('line', { class: 'grid-line', x1: xOf(i).toFixed(1), y1: String(PAD), x2: xOf(i).toFixed(1), y2: String(SIZE - PAD) }))
  }
  mainLayer.append(svg('line', { class: 'grid-axis', x1: String(PAD - 14), y1: yOf(0).toFixed(1), x2: String(SIZE - PAD + 14), y2: yOf(0).toFixed(1) }))
  mainLayer.append(svg('line', { class: 'grid-axis', x1: xOf(0).toFixed(1), y1: String(SIZE - PAD + 14), x2: xOf(0).toFixed(1), y2: String(PAD - 14) }))
  mainLayer.append(svg('path', { class: 'grid-head', d: `M${SIZE - PAD + 14} ${yOf(0)} l-18 -9 v18 Z` }))
  mainLayer.append(svg('path', { class: 'grid-head', d: `M${xOf(0)} ${PAD - 14} l-9 18 h18 Z` }))

  for (let i = -range; i <= range; i++) {
    if (i === 0) continue
    const xLabel = svg('text', { class: 'grid-label', x: xOf(i).toFixed(1), y: (yOf(0) + 30).toFixed(1), 'text-anchor': 'middle' })
    xLabel.textContent = String(i)
    const yLabel = svg('text', { class: 'grid-label', x: (xOf(0) - 16).toFixed(1), y: (yOf(i) + 9).toFixed(1), 'text-anchor': 'end' })
    yLabel.textContent = String(i)
    mainLayer.append(xLabel, yLabel)
  }

  const toLocal = (event: PointerEvent): Point => {
    const ctm = root.getScreenCTM()
    if (!ctm) return { x: 0, y: 0 }
    const p = new DOMPoint(event.clientX, event.clientY).matrixTransform(ctm.inverse())
    return snap(p.x, p.y)
  }

  const cleanups: Array<() => void> = []
  const pointsOf = (points: Point[], at: Point): string =>
    points.map((p) => `${xOf(p.x + at.x).toFixed(1)},${yOf(p.y + at.y).toFixed(1)}`).join(' ')

  const board: GridBoard = {
    el: wrap,
    xOf,
    yOf,

    pick(onChange) {
      let value: Point = { x: 0, y: 0 }
      const g = svg('g', { class: 'pick hidden' })
      g.append(svg('circle', { class: 'pick-ring', r: '22' }))
      g.append(svg('path', { class: 'pick-cross', d: 'M-12 -12 L12 12 M12 -12 L-12 12' }))
      dragLayer.append(g)
      const place = (): void => {
        g.classList.remove('hidden')
        g.setAttribute('transform', `translate(${xOf(value.x).toFixed(1)} ${yOf(value.y).toFixed(1)})`)
      }
      const tap = (e: PointerEvent): void => {
        value = toLocal(e)
        place()
        onChange(value)
        e.preventDefault()
      }
      root.addEventListener('pointerdown', tap)
      cleanups.push(() => root.removeEventListener('pointerdown', tap))
      return { get: () => value, set: (p) => { value = p; place(); onChange(value) } }
    },

    shape(points, cls = '') {
      const poly = svg('polygon', { class: `shape ${cls}`, points: pointsOf(points, { x: 0, y: 0 }) })
      mainLayer.append(poly)
      return poly
    },

    dragShape(points, at, onChange) {
      let anchor = { ...at }
      const poly = svg('polygon', { class: 'shape ghost', points: pointsOf(points, anchor) })
      dragLayer.append(poly)
      const place = (): void => poly.setAttribute('points', pointsOf(points, anchor))
      let dragging = false
      const down = (e: PointerEvent): void => {
        dragging = true
        poly.setPointerCapture(e.pointerId)
        e.preventDefault()
      }
      const move = (e: PointerEvent): void => {
        if (!dragging) return
        anchor = toLocal(e)
        place()
        onChange(anchor)
      }
      const up = (): void => { dragging = false }
      poly.addEventListener('pointerdown', down)
      poly.addEventListener('pointermove', move)
      poly.addEventListener('pointerup', up)
      poly.addEventListener('pointercancel', up)
      const tap = (e: PointerEvent): void => {
        if (e.target === poly) return
        anchor = toLocal(e)
        place()
        onChange(anchor)
      }
      root.addEventListener('pointerdown', tap)
      cleanups.push(() => {
        poly.removeEventListener('pointerdown', down)
        poly.removeEventListener('pointermove', move)
        poly.removeEventListener('pointerup', up)
        poly.removeEventListener('pointercancel', up)
        root.removeEventListener('pointerdown', tap)
      })
      return { get: () => anchor, set: (p) => { anchor = { ...p }; place(); onChange(anchor) } }
    },

    scout(value, axis) {
      const x = axis === 'x' ? xOf(value) : xOf(0)
      const y = axis === 'x' ? yOf(0) : yOf(value)
      const g = svg('g', { class: `scout ${axis}`, transform: `translate(${x.toFixed(1)} ${y.toFixed(1)})` })
      g.innerHTML = `
        <circle class="scout-head" cx="0" cy="-34" r="13"/>
        <path class="scout-body" d="M0 -21 v22"/>
        <path class="scout-arm" d="M0 -14 l16 -8"/>
        <path class="scout-leg" d="M0 1 l-9 14 M0 1 l9 14"/>`
      mainLayer.append(g)
    },

    guide(value, axis) {
      const line = axis === 'x'
        ? { x1: xOf(value), y1: PAD, x2: xOf(value), y2: SIZE - PAD }
        : { x1: PAD, y1: yOf(value), x2: SIZE - PAD, y2: yOf(value) }
      hintLayer.append(svg('line', {
        class: 'guide',
        x1: line.x1.toFixed(1), y1: line.y1.toFixed(1), x2: line.x2.toFixed(1), y2: line.y2.toFixed(1),
      }))
    },

    mirrorAxis(axis) {
      const line = axis === 'y'
        ? { x1: xOf(0), y1: PAD - 14, x2: xOf(0), y2: SIZE - PAD + 14 }
        : { x1: PAD - 14, y1: yOf(0), x2: SIZE - PAD + 14, y2: yOf(0) }
      mainLayer.append(svg('line', {
        class: 'mirror-axis',
        x1: line.x1.toFixed(1), y1: line.y1.toFixed(1), x2: line.x2.toFixed(1), y2: line.y2.toFixed(1),
      }))
    },

    span(from, to, label) {
      const g = svg('g', { class: 'hint-span' })
      g.append(svg('line', {
        x1: xOf(from.x).toFixed(1), y1: yOf(from.y).toFixed(1),
        x2: xOf(to.x).toFixed(1), y2: yOf(to.y).toFixed(1),
      }))
      const text = svg('text', {
        x: ((xOf(from.x) + xOf(to.x)) / 2).toFixed(1),
        y: ((yOf(from.y) + yOf(to.y)) / 2 - 10).toFixed(1),
        'text-anchor': 'middle',
      })
      text.textContent = label
      g.append(text)
      hintLayer.append(g)
    },

    curve(fn, cls = '') {
      const points: string[] = []
      for (let x = -range; x <= range; x += 0.25) {
        const y = fn(x)
        if (!Number.isFinite(y) || Math.abs(y) > range + 1) continue
        points.push(`${xOf(x).toFixed(1)},${yOf(y).toFixed(1)}`)
      }
      const node = svg('polyline', { class: `curve ${cls}`, points: points.join(' ') })
      mainLayer.append(node)
      return node
    },

    dot(p, cls = '') {
      hintLayer.append(svg('circle', {
        class: `grid-dot ${cls}`, cx: xOf(p.x).toFixed(1), cy: yOf(p.y).toFixed(1), r: '11',
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
