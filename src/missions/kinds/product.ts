import { makeRng } from '../../battle/rng'
import { rectBoard } from '../boards/rect'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface ProductConfig {
  cols: number
  rows: number
  target: number
  square: boolean
}

export interface Size { w: number; h: number }

/** Every way of writing the number as a rectangle that fits the board. */
export function factorPairs(target: number, cols: number, rows: number): Size[] {
  const pairs: Size[] = []
  for (let w = 1; w <= cols; w++) {
    if (target % w !== 0) continue
    const h = target / w
    if (h >= 1 && h <= rows) pairs.push({ w, h })
  }
  return pairs
}

export function generate(seed: number): MissionLogic<ProductConfig, Size> {
  const rng = makeRng(seed)
  const cols = 12
  const rows = 10
  // A number with a few factorisations, none of them one by itself.
  let target = 24
  for (let attempt = 0; attempt < 40; attempt++) {
    const a = 2 + Math.floor(rng() * 9)
    const b = 2 + Math.floor(rng() * 8)
    const value = a * b
    if (factorPairs(value, cols, rows).filter((p) => p.w > 1 && p.h > 1).length >= 2) {
      target = value
      break
    }
  }
  const pairs = factorPairs(target, cols, rows)
  const shown = pairs.find((p) => p.w > 1 && p.h > 1) ?? pairs[0]!

  return {
    config: { cols, rows, target, square: false },
    solution: shown,
    check: (answer) => answer.w * answer.h === target,
    hints: [
      { text: `צריך מלבן ששטחו ${num(target)}` },
      { text: `${num(shown.w)} בשורה` },
      { text: `${num(shown.w)} כפול ${num(shown.h)}` },
      { text: 'כך זה נראה' },
    ],
    explain: [
      `${num(shown.w)} × ${num(shown.h)} = ${num(target)}.`,
      `יש גם דרכים אחרות: ${pairs.map((p) => num(`${p.w}×${p.h}`)).join(' , ')}.`,
    ],
  }
}

function mount(logic: MissionLogic<ProductConfig, Size>, onChange: () => void): Board<Size> {
  const { cols, rows, target, square } = logic.config
  const board = rectBoard({ cols, rows, square })
  board.goal(`= ${target}`)
  const shown = logic.solution

  let touched = false
  const corner = board.corner({ w: 1, h: 1 }, () => { touched = true; onChange() })

  return {
    el: board.el,
    answer: () => (touched ? corner.get() : null),
    hint(level) {
      if (level === 1) board.goal(`= ${target}`)
      if (level === 2) board.strip(shown.w, 1)
      if (level === 3) board.strip(shown.w, shown.h)
      if (level >= 4) corner.set(shown)
    },
    demonstrate() { corner.set(shown) },
    place: (size) => corner.set(size),
    destroy: () => board.destroy(),
  }
}

export const product: MissionModule<ProductConfig, Size> = { kind: 'product', generate, mount }

export function generateSquare(seed: number): MissionLogic<ProductConfig, Size> {
  const rng = makeRng(seed)
  const cols = 12
  const rows = 12
  const side = 3 + Math.floor(rng() * 8)
  const target = side * side
  return {
    config: { cols, rows, target, square: true },
    solution: { w: side, h: side },
    check: (answer) => answer.w === side && answer.h === side,
    hints: [
      { text: `ריבוע ששטחו ${num(target)}` },
      { text: 'אותו מספר בשורה ובעמודה' },
      { text: `${num(side)} בשורה` },
      { text: `${num(side)} כפול ${num(side)}` },
    ],
    explain: [
      `${num(side)} × ${num(side)} = ${num(target)}.`,
      `הצלע היא השורש הריבועי של ${num(target)}.`,
    ],
  }
}

export const perfectSquare: MissionModule<ProductConfig, Size> = {
  kind: 'perfect-square',
  generate: generateSquare,
  mount,
}
