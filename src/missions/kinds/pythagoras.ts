import { makeRng } from '../../battle/rng'
import { keypad } from '../boards/keypad'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface PythagorasConfig {
  a: number
  b: number
  c: number
  /** squares on the legs, or a missing side */
  mode: 'squares' | 'side'
  /** which side is missing, when a side is asked for */
  missing: 'a' | 'b' | 'c'
}

const TRIPLES: Array<[number, number, number]> = [
  [3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25], [12, 16, 20],
]

function build(seed: number, mode: 'squares' | 'side'): MissionLogic<PythagorasConfig, number> {
  const rng = makeRng(seed)
  const [a, b, c] = TRIPLES[Math.floor(rng() * TRIPLES.length)]!
  const missing: 'a' | 'b' | 'c' = mode === 'squares' ? 'c' : rng() < 0.6 ? 'c' : rng() < 0.5 ? 'a' : 'b'
  const answer = mode === 'squares'
    ? c * c
    : missing === 'c' ? c : missing === 'a' ? a : b

  return {
    config: { a, b, c, mode, missing },
    solution: answer,
    check: (value) => value === answer,
    hints: mode === 'squares'
      ? [
        { text: `שטח הריבוע על הניצב הוא ${num(a)} × ${num(a)} = ${num(a * a)}` },
        { text: `ועל הניצב השני ${num(b)} × ${num(b)} = ${num(b * b)}` },
        { text: `שני השטחים יחד` },
        { text: `${num(a * a)} + ${num(b * b)} = ${num(c * c)}` },
      ]
      : [
        { text: `${num(`${a}² + ${b}² = ${c}²`)}` },
        { text: missing === 'c' ? `${num(a * a)} + ${num(b * b)}` : `${num(c * c)} − ${num(missing === 'a' ? b * b : a * a)}` },
        { text: `השורש של ${num(answer * answer)}` },
        { text: `הצלע היא ${num(answer)}` },
      ],
    explain: mode === 'squares'
      ? [
        `${num(a)}² + ${num(b)}² = ${num(a * a)} + ${num(b * b)} = ${num(c * c)}.`,
        `שטח הריבוע על היתר שווה לסכום השטחים על הניצבים.`,
      ]
      : [
        `${num(a)}² + ${num(b)}² = ${num(c)}².`,
        `הצלע החסרה היא ${num(answer)}.`,
      ],
  }
}

export function generateSquares(seed: number): MissionLogic<PythagorasConfig, number> {
  return build(seed, 'squares')
}

export function generateSide(seed: number): MissionLogic<PythagorasConfig, number> {
  return build(seed, 'side')
}

const SVG_NS = 'http://www.w3.org/2000/svg'

function el(tag: string, attrs: Record<string, string>, text?: string): SVGElement {
  const node = document.createElementNS(SVG_NS, tag)
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v)
  if (text !== undefined) node.textContent = text
  return node
}

function mount(logic: MissionLogic<PythagorasConfig, number>, onChange: () => void): Board<number> {
  const { a, b, c, mode, missing } = logic.config
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap pythagoras-board'

  const unit = Math.min(160 / Math.max(a, b), 26)
  const ox = 330
  const oy = 430
  const A = { x: ox, y: oy }
  const B = { x: ox + b * unit, y: oy }
  const C = { x: ox, y: oy - a * unit }

  const root = document.createElementNS(SVG_NS, 'svg')
  root.setAttribute('class', 'board pythagoras-art')
  root.setAttribute('viewBox', '0 0 900 620')

  const legSquares: SVGElement[] = []
  const sideLabels: SVGElement[] = []
  if (mode === 'squares') {
    root.append(el('rect', {
      class: 'leg-square', x: String(A.x - a * unit), y: String(C.y), width: String(a * unit), height: String(a * unit),
    }))
    legSquares.push(root.lastElementChild as SVGElement)
    root.append(el('text', { class: 'square-label', x: String(A.x - (a * unit) / 2), y: String(C.y + (a * unit) / 2 + 10), 'text-anchor': 'middle' }, String(a * a)))
    root.append(el('rect', {
      class: 'leg-square', x: String(A.x), y: String(A.y), width: String(b * unit), height: String(b * unit),
    }))
    legSquares.push(root.lastElementChild as SVGElement)
    root.append(el('text', { class: 'square-label', x: String(A.x + (b * unit) / 2), y: String(A.y + (b * unit) / 2 + 10), 'text-anchor': 'middle' }, String(b * b)))
    // The square on the hypotenuse, on the far side from the right angle.
    const hx = B.x - C.x
    const hy = B.y - C.y
    const len = Math.hypot(hx, hy)
    let nx = -hy / len
    let ny = hx / len
    const mid = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 }
    const away = (mid.x + nx - A.x) ** 2 + (mid.y + ny - A.y) ** 2
    const toward = (mid.x - nx - A.x) ** 2 + (mid.y - ny - A.y) ** 2
    if (toward > away) { nx = -nx; ny = -ny }
    const p3 = { x: B.x + nx * len, y: B.y + ny * len }
    const p4 = { x: C.x + nx * len, y: C.y + ny * len }
    root.append(el('polygon', {
      class: 'hyp-square',
      points: `${C.x},${C.y} ${B.x},${B.y} ${p3.x},${p3.y} ${p4.x},${p4.y}`,
    }))
    root.append(el('text', {
      class: 'square-label wanted',
      x: String((C.x + B.x + p3.x + p4.x) / 4), y: String((C.y + B.y + p3.y + p4.y) / 4 + 14), 'text-anchor': 'middle',
    }, '?'))
  } else {
    root.append(el('text', { class: 'side-label', x: String(A.x - 34), y: String((A.y + C.y) / 2), 'text-anchor': 'middle' }, missing === 'a' ? '?' : String(a)))
    root.append(el('text', { class: 'side-label', x: String((A.x + B.x) / 2), y: String(A.y + 44), 'text-anchor': 'middle' }, missing === 'b' ? '?' : String(b)))
    root.append(el('text', { class: 'side-label', x: String((B.x + C.x) / 2 + 30), y: String((B.y + C.y) / 2 - 10), 'text-anchor': 'middle' }, missing === 'c' ? '?' : String(c)))
    sideLabels.push(...Array.from(root.querySelectorAll<SVGElement>('.side-label')))
  }

  root.append(el('polygon', { class: 'triangle', points: `${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}` }))
  root.append(el('path', { class: 'right-angle', d: `M${A.x + 22} ${A.y} v-22 h-22` }))
  wrap.append(root)

  const pad = keypad({ max: 999 }, onChange)
  wrap.append(pad.el)

  return {
    el: wrap,
    answer: () => pad.value(),
    hint(level) {
      // The squares, and then the sides, light up one after another.
      if (level === 1) legSquares[0]?.classList.add('lit')
      if (level === 1) sideLabels[0]?.classList.add('lit')
      if (level === 2) legSquares[1]?.classList.add('lit')
      if (level === 2) sideLabels[1]?.classList.add('lit')
      if (level === 3) for (const node of [...legSquares, ...sideLabels]) node.classList.add('lit')
      if (level >= 4) pad.set(logic.solution)
    },
    demonstrate() { pad.set(logic.solution) },
    place: (value) => pad.set(value),
    destroy: () => wrap.remove(),
  }
}

export const threeSquares: MissionModule<PythagorasConfig, number> = {
  kind: 'pythagoras-squares', generate: generateSquares, mount,
}
export const missingSide: MissionModule<PythagorasConfig, number> = {
  kind: 'pythagoras-side', generate: generateSide, mount,
}
