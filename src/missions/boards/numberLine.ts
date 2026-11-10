const SVG_NS = 'http://www.w3.org/2000/svg'

export interface NumberLineOptions {
  from: number
  to: number
  /** distance between two small ticks */
  tickStep: number
  /** every how many ticks a number is written */
  labelEvery: number
}

export interface Draggable {
  get: () => number
  set: (value: number) => void
}

export interface NumberLineBoard {
  el: SVGSVGElement
  xOf: (value: number) => number
  flag: (value: number) => void
  chest: (initial: number, onChange: (value: number) => void) => Draggable
  /** a soft band between two values */
  band: (a: number, b: number) => void
  /** a bracket between two neighbouring ticks, with its size written on it */
  bracket: (a: number, b: number, label: string) => void
  /** number every tick from a to b */
  count: (a: number, b: number) => void
  /** an arrow from one value to another, drawn above the line */
  arrow: (from: number, to: number, label: string, tone?: 'plus' | 'minus') => SVGGElement
  clearHints: () => void
  destroy: () => void
}

const W = 1000
const H = 300
const LEFT = 70
const RIGHT = W - 70
const AXIS = 130

function svg<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string> = {}): SVGElementTagNameMap[K] {
  const node = document.createElementNS(SVG_NS, tag)
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v)
  return node
}

export function numberLine(options: NumberLineOptions): NumberLineBoard {
  const { from, to, tickStep, labelEvery } = options
  const root = svg('svg', { class: 'board number-line', viewBox: `0 0 ${W} ${H}` })
  const hintLayer = svg('g', { class: 'hints' })
  const mainLayer = svg('g', { class: 'main' })
  const dragLayer = svg('g', { class: 'drag' })
  root.append(hintLayer, mainLayer, dragLayer)

  const span = to - from
  const xOf = (value: number): number => LEFT + ((value - from) / span) * (RIGHT - LEFT)
  const valueOf = (x: number): number => from + ((x - LEFT) / (RIGHT - LEFT)) * span
  const snap = (value: number): number => {
    const steps = Math.round((value - from) / tickStep)
    const clamped = Math.min(Math.max(steps, 0), Math.round(span / tickStep))
    return from + clamped * tickStep
  }

  mainLayer.append(svg('line', { class: 'axis', x1: String(LEFT - 40), y1: String(AXIS), x2: String(RIGHT + 40), y2: String(AXIS) }))
  mainLayer.append(svg('path', {
    class: 'axis-head',
    d: `M${RIGHT + 40} ${AXIS} l-22 -11 v22 Z`,
  }))

  for (let i = 0; i * tickStep <= span + 1e-9; i++) {
    const value = from + i * tickStep
    const x = xOf(value)
    const labelled = i % labelEvery === 0
    mainLayer.append(svg('line', {
      class: `tick${labelled ? ' labelled' : ''}`,
      x1: x.toFixed(1), y1: String(AXIS - (labelled ? 20 : 11)),
      x2: x.toFixed(1), y2: String(AXIS + (labelled ? 20 : 11)),
    }))
    if (labelled) {
      const text = svg('text', { class: 'tick-label', x: x.toFixed(1), y: String(AXIS + 50), 'text-anchor': 'middle' })
      text.textContent = String(value)
      mainLayer.append(text)
    }
  }

  const toLocal = (event: PointerEvent): number => {
    const ctm = root.getScreenCTM()
    if (!ctm) return from
    const p = new DOMPoint(event.clientX, event.clientY).matrixTransform(ctm.inverse())
    return snap(valueOf(p.x))
  }

  const cleanups: Array<() => void> = []

  const board: NumberLineBoard = {
    el: root,
    xOf,

    flag(value) {
      const x = xOf(value)
      const g = svg('g', { class: 'flag', transform: `translate(${x.toFixed(1)} ${AXIS})` })
      g.append(svg('path', { d: 'M0 0 v-96', class: 'pole' }))
      g.append(svg('path', { d: 'M0 -96 l58 18 -58 18 Z', class: 'cloth' }))
      mainLayer.append(g)
    },

    chest(initial, onChange) {
      let value = snap(initial)
      const g = svg('g', { class: 'chest' })
      g.innerHTML = `
        <ellipse class="chest-shadow" cx="0" cy="34" rx="44" ry="12"/>
        <path d="M-38 34 h76 v-30 h-76 Z" class="chest-body"/>
        <path d="M-38 4 q38 -34 76 0 Z" class="chest-lid"/>
        <rect x="-9" y="0" width="18" height="22" rx="4" class="chest-lock"/>
        <path d="M-38 16 h76" class="chest-band"/>`
      // The chest rides below the numbers, with a thread up to the line, so it
      // never covers a label.
      const thread = svg('line', { class: 'chest-thread', y1: String(AXIS + 6), y2: String(AXIS + 78) })
      dragLayer.append(thread)
      const place = (): void => {
        const x = xOf(value)
        g.setAttribute('transform', `translate(${x.toFixed(1)} ${AXIS + 112})`)
        thread.setAttribute('x1', x.toFixed(1))
        thread.setAttribute('x2', x.toFixed(1))
      }
      place()
      dragLayer.append(g)

      let dragging = false
      const down = (e: PointerEvent): void => {
        dragging = true
        g.setPointerCapture(e.pointerId)
        value = toLocal(e)
        place()
        onChange(value)
        e.preventDefault()
      }
      const move = (e: PointerEvent): void => {
        if (!dragging) return
        value = toLocal(e)
        place()
        onChange(value)
      }
      const up = (): void => { dragging = false }
      g.addEventListener('pointerdown', down)
      g.addEventListener('pointermove', move)
      g.addEventListener('pointerup', up)
      g.addEventListener('pointercancel', up)
      // Tapping the line itself moves the chest there as well.
      const tap = (e: PointerEvent): void => {
        value = toLocal(e)
        place()
        onChange(value)
      }
      root.addEventListener('pointerdown', tap)
      cleanups.push(() => {
        g.removeEventListener('pointerdown', down)
        g.removeEventListener('pointermove', move)
        g.removeEventListener('pointerup', up)
        g.removeEventListener('pointercancel', up)
        root.removeEventListener('pointerdown', tap)
      })

      return {
        get: () => value,
        set: (v) => { value = snap(v); place(); onChange(value) },
      }
    },

    band(a, b) {
      const x1 = xOf(Math.min(a, b))
      const x2 = xOf(Math.max(a, b))
      hintLayer.append(svg('rect', {
        class: 'hint-band', x: x1.toFixed(1), y: String(AXIS - 60),
        width: (x2 - x1).toFixed(1), height: '120', rx: '10',
      }))
    },

    bracket(a, b, label) {
      const x1 = xOf(a)
      const x2 = xOf(b)
      const y = AXIS + 74
      const g = svg('g', { class: 'hint-bracket' })
      g.append(svg('path', { d: `M${x1.toFixed(1)} ${y - 12} v12 H${x2.toFixed(1)} v-12` }))
      const text = svg('text', { x: ((x1 + x2) / 2).toFixed(1), y: String(y + 30), 'text-anchor': 'middle' })
      text.textContent = label
      g.append(text)
      hintLayer.append(g)
    },

    count(a, b) {
      const step = a <= b ? tickStep : -tickStep
      const steps = Math.round(Math.abs(b - a) / tickStep)
      for (let i = 1; i <= steps; i++) {
        const value = a + step * i
        const text = svg('text', {
          class: 'hint-count', x: xOf(value).toFixed(1), y: String(AXIS - 34), 'text-anchor': 'middle',
        })
        text.textContent = String(i)
        hintLayer.append(text)
      }
    },

    arrow(fromValue, toValue, label, tone = 'plus') {
      const x1 = xOf(fromValue)
      const x2 = xOf(toValue)
      const top = AXIS - 56
      const g = svg('g', { class: `line-arrow ${tone}` })
      g.append(svg('path', {
        d: `M${x1.toFixed(1)} ${AXIS - 6} C${x1.toFixed(1)} ${top} ${x2.toFixed(1)} ${top} ${x2.toFixed(1)} ${AXIS - 6}`,
        fill: 'none',
      }))
      const dir = x2 >= x1 ? 1 : -1
      g.append(svg('path', {
        class: 'head',
        d: `M${x2.toFixed(1)} ${AXIS - 6} l${(-12 * dir).toFixed(1)} -14 l${(24 * dir).toFixed(1)} 0 Z`,
      }))
      const text = svg('text', { x: ((x1 + x2) / 2).toFixed(1), y: String(top - 8), 'text-anchor': 'middle' })
      text.textContent = label
      g.append(text)
      mainLayer.append(g)
      return g
    },

    clearHints() {
      hintLayer.replaceChildren()
    },

    destroy() {
      for (const fn of cleanups) fn()
      root.remove()
    },
  }

  return board
}
