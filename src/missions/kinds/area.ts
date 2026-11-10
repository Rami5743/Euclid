import { makeRng } from '../../battle/rng'
import { grid, type Point } from '../boards/grid'
import { keypad } from '../boards/keypad'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface AreaConfig {
  range: number
  /** the tilted square, as four lattice points */
  shape: Point[]
  /** the legs of the tilt */
  p: number
  q: number
}

export function shoelace(points: Point[]): number {
  let sum = 0
  for (let i = 0; i < points.length; i++) {
    const a = points[i]!
    const b = points[(i + 1) % points.length]!
    sum += a.x * b.y - b.x * a.y
  }
  return Math.abs(sum) / 2
}

export function generate(seed: number): MissionLogic<AreaConfig, number> {
  const rng = makeRng(seed)
  const range = 6
  const p = 1 + Math.floor(rng() * 3)
  const q = 1 + Math.floor(rng() * 3)
  const base: Point = { x: -Math.floor(rng() * 2) - 1, y: -Math.floor(rng() * 2) - 1 }
  // A square whose sides are the vector (p, q) and the one at right angles to it.
  const shape: Point[] = [
    base,
    { x: base.x + p, y: base.y + q },
    { x: base.x + p - q, y: base.y + q + p },
    { x: base.x - q, y: base.y + p },
  ]
  const area = p * p + q * q
  const box = p + q

  return {
    config: { range, shape, p, q },
    solution: area,
    check: (value) => value === area,
    hints: [
      { text: 'ריבוע מסביב לצורה' },
      { text: `שטח הריבוע הגדול הוא ${num(box)} × ${num(box)} = ${num(box * box)}` },
      { text: `בפינות יש ארבעה משולשים, כל אחד ${num(p)} × ${num(q)} : ${num(2)}` },
      { text: `${num(box * box)} − ${num(2 * p * q)} = ${num(area)}` },
    ],
    explain: [
      `הריבוע הגדול מסביב הוא ${num(box)} × ${num(box)} = ${num(box * box)}.`,
      `ארבעת המשולשים בפינות הם יחד ${num(2 * p * q)}.`,
      `${num(box * box)} − ${num(2 * p * q)} = ${num(area)}.`,
    ],
  }
}

function mount(logic: MissionLogic<AreaConfig, number>, onChange: () => void): Board<number> {
  const { range, shape, p, q } = logic.config
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap area-board'
  const board = grid({ range })
  board.shape(shape)
  wrap.append(board.el)

  const pad = keypad({ max: 99 }, onChange)
  wrap.append(pad.el)

  const xs = shape.map((s) => s.x)
  const ys = shape.map((s) => s.y)
  const box: Point[] = [
    { x: Math.min(...xs), y: Math.min(...ys) },
    { x: Math.max(...xs), y: Math.min(...ys) },
    { x: Math.max(...xs), y: Math.max(...ys) },
    { x: Math.min(...xs), y: Math.max(...ys) },
  ]

  return {
    el: wrap,
    answer: () => pad.value(),
    hint(level) {
      if (level === 1) board.shape(box, 'outline')
      if (level === 2) for (const corner of box) board.dot(corner, 'lit')
      if (level === 3) board.span(shape[0]!, shape[1]!, `${p},${q}`)
      if (level >= 4) pad.set(logic.solution)
    },
    demonstrate() { pad.set(logic.solution) },
    place: (value) => pad.set(value),
    destroy() { board.destroy(); wrap.remove() },
  }
}

export const latticeArea: MissionModule<AreaConfig, number> = { kind: 'area', generate, mount }
