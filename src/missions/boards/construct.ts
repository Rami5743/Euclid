const SVG_NS = 'http://www.w3.org/2000/svg'

export interface Pt { x: number; y: number }
export interface Line { a: Pt; b: Pt }
export interface Circle { c: Pt; r: number }

export interface ConstructBoard {
  el: HTMLElement
  addPoint: (p: Pt, label?: string) => void
  addLine: (a: Pt, b: Pt) => void
  addCircle: (c: Pt, through: Pt) => void
  points: () => Pt[]
  lines: () => Line[]
  circles: () => Circle[]
  /** how many objects the player has drawn */
  drawn: () => number
  destroy: () => void
}

const W = 900
const H = 600
const SNAP = 18
const EPS = 2.5

function svg<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string> = {}): SVGElementTagNameMap[K] {
  const node = document.createElementNS(SVG_NS, tag)
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v)
  return node
}

export function distance(a: Pt, b: Pt): number {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

export function same(a: Pt, b: Pt, eps = EPS): boolean {
  return distance(a, b) <= eps
}

export function midpoint(a: Pt, b: Pt): Pt {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
}

/** Where two straight lines cross, or null when they do not. */
export function lineCross(p: Line, q: Line): Pt | null {
  const x1 = p.a.x; const y1 = p.a.y; const x2 = p.b.x; const y2 = p.b.y
  const x3 = q.a.x; const y3 = q.a.y; const x4 = q.b.x; const y4 = q.b.y
  const d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)
  if (Math.abs(d) < 1e-9) return null
  const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / d
  return { x: x1 + t * (x2 - x1), y: y1 + t * (y2 - y1) }
}

export function lineCircle(line: Line, circle: Circle): Pt[] {
  const dx = line.b.x - line.a.x
  const dy = line.b.y - line.a.y
  const fx = line.a.x - circle.c.x
  const fy = line.a.y - circle.c.y
  const a = dx * dx + dy * dy
  const b = 2 * (fx * dx + fy * dy)
  const c = fx * fx + fy * fy - circle.r * circle.r
  const disc = b * b - 4 * a * c
  if (disc < 0) return []
  const root = Math.sqrt(disc)
  const ts = disc === 0 ? [-b / (2 * a)] : [(-b - root) / (2 * a), (-b + root) / (2 * a)]
  return ts.map((t) => ({ x: line.a.x + t * dx, y: line.a.y + t * dy }))
}

export function circleCross(p: Circle, q: Circle): Pt[] {
  const d = distance(p.c, q.c)
  if (d < 1e-9 || d > p.r + q.r || d < Math.abs(p.r - q.r)) return []
  const a = (p.r * p.r - q.r * q.r + d * d) / (2 * d)
  const h2 = p.r * p.r - a * a
  if (h2 < 0) return []
  const h = Math.sqrt(h2)
  const mx = p.c.x + (a * (q.c.x - p.c.x)) / d
  const my = p.c.y + (a * (q.c.y - p.c.y)) / d
  const rx = (-(q.c.y - p.c.y) * h) / d
  const ry = ((q.c.x - p.c.x) * h) / d
  return [{ x: mx + rx, y: my + ry }, { x: mx - rx, y: my - ry }]
}

export function constructBoard(onChange: () => void): ConstructBoard {
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap construct-board'
  const root = svg('svg', { class: 'board construct', viewBox: `0 0 ${W} ${H}` })
  const shapeLayer = svg('g', { class: 'shapes' })
  const pointLayer = svg('g', { class: 'points' })
  root.append(shapeLayer, pointLayer)
  wrap.append(root)

  const tray = document.createElement('div')
  tray.className = 'tray'
  wrap.append(tray)

  const points: Pt[] = []
  const labels: Array<{ p: Pt; text: string }> = []
  const lines: Line[] = []
  const circles: Circle[] = []
  let tool: 'line' | 'circle' = 'line'
  let pending: Pt | null = null
  let drawnCount = 0

  const paintPoints = (): void => {
    pointLayer.replaceChildren()
    // Labels are redrawn with the points, or the repaint would wipe them.
    for (const label of labels) {
      const text = svg('text', { class: 'cpoint-label', x: (label.p.x + 14).toFixed(1), y: (label.p.y - 12).toFixed(1) })
      text.textContent = label.text
      pointLayer.append(text)
    }
    for (const p of points) {
      const dot = svg('circle', {
        class: `cpoint${pending && same(pending, p) ? ' pending' : ''}`,
        cx: p.x.toFixed(1), cy: p.y.toFixed(1), r: '9',
      })
      pointLayer.append(dot)
    }
  }

  const addPoint = (p: Pt, label?: string): void => {
    if (p.x < -40 || p.x > W + 40 || p.y < -40 || p.y > H + 40) return
    if (points.some((q) => same(q, p))) return
    points.push(p)
    if (label) labels.push({ p, text: label })
    paintPoints()
  }

  const addIntersections = (): void => {
    const fresh: Pt[] = []
    for (let i = 0; i < lines.length; i++) {
      for (let j = i + 1; j < lines.length; j++) {
        const p = lineCross(lines[i]!, lines[j]!)
        if (p) fresh.push(p)
      }
      for (const circle of circles) fresh.push(...lineCircle(lines[i]!, circle))
    }
    for (let i = 0; i < circles.length; i++) {
      for (let j = i + 1; j < circles.length; j++) fresh.push(...circleCross(circles[i]!, circles[j]!))
    }
    for (const p of fresh) addPoint(p)
  }

  const drawLine = (a: Pt, b: Pt): void => {
    const dx = b.x - a.x
    const dy = b.y - a.y
    const len = Math.hypot(dx, dy) || 1
    const far = 2000 / len
    shapeLayer.append(svg('line', {
      class: 'cline',
      x1: (a.x - dx * far).toFixed(1), y1: (a.y - dy * far).toFixed(1),
      x2: (a.x + dx * far).toFixed(1), y2: (a.y + dy * far).toFixed(1),
    }))
  }

  const board: ConstructBoard = {
    el: wrap,
    addPoint,
    addLine(a, b) {
      lines.push({ a, b })
      drawLine(a, b)
      addPoint(a)
      addPoint(b)
      addIntersections()
      drawnCount++
      onChange()
    },
    addCircle(c, through) {
      const r = distance(c, through)
      if (r < 1) return
      circles.push({ c, r })
      shapeLayer.append(svg('circle', { class: 'ccircle', cx: c.x.toFixed(1), cy: c.y.toFixed(1), r: r.toFixed(1) }))
      addIntersections()
      drawnCount++
      onChange()
    },
    points: () => [...points],
    lines: () => [...lines],
    circles: () => [...circles],
    drawn: () => drawnCount,
    destroy: () => wrap.remove(),
  }

  const pick = (event: PointerEvent): void => {
    const ctm = root.getScreenCTM()
    if (!ctm) return
    const p = new DOMPoint(event.clientX, event.clientY).matrixTransform(ctm.inverse())
    let nearest: Pt | null = null
    let best = SNAP
    for (const q of points) {
      const d = distance(q, { x: p.x, y: p.y })
      if (d < best) { best = d; nearest = q }
    }
    if (!nearest) return
    if (!pending) { pending = nearest; paintPoints(); return }
    if (same(pending, nearest)) { pending = null; paintPoints(); return }
    if (tool === 'line') board.addLine(pending, nearest)
    else board.addCircle(pending, nearest)
    pending = null
    paintPoints()
  }
  root.addEventListener('pointerdown', pick)

  const paintTray = (): void => {
    tray.replaceChildren()
    for (const [key, label] of [['line', 'ישר'], ['circle', 'מעגל']] as const) {
      const button = document.createElement('button')
      button.type = 'button'
      button.className = `btn small tray-key${tool === key ? ' primary' : ''}`
      button.textContent = label
      button.addEventListener('click', () => { tool = key; pending = null; paintTray(); paintPoints() })
      tray.append(button)
    }
  }
  paintTray()

  return board
}
