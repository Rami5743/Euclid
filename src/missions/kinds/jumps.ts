import { makeRng } from '../../battle/rng'
import { numberLine, type NumberLineOptions } from '../boards/numberLine'
import { frame } from './voyage'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface JumpsConfig extends NumberLineOptions {
  start: number
  target: number
  /** the jumps on offer, each of which may be used as often as needed */
  keys: number[]
  /** one sequence of keys that lands on the target */
  route: number[]
}

const KEY_SETS = [
  [5, -2],
  [4, -3],
  [6, -4],
  [3, -5],
  [7, -3],
]

export function generate(seed: number): MissionLogic<JumpsConfig, number> {
  const rng = makeRng(seed)
  const keys = KEY_SETS[Math.floor(rng() * KEY_SETS.length)]!
  const steps = 3 + Math.floor(rng() * 2)
  const start = rng() < 0.5 ? 0 : -keys[0]!

  // The route is built first, and the line is then drawn around it.
  const route: number[] = []
  const stops = [start]
  for (let i = 0; i < steps; i++) {
    const key = keys[Math.floor(rng() * keys.length)]!
    route.push(key)
    stops.push(stops[stops.length - 1]! + key)
  }
  const target = stops[stops.length - 1]!
  if (target === start) route.push(keys[0]!)
  const finalTarget = start + route.reduce((a, b) => a + b, 0)
  const line = frame([...stops, finalTarget], 1, 5)
  const distance = finalTarget - start

  return {
    config: { ...line, start, target: finalTarget, keys, route },
    solution: finalTarget,
    check: (answer) => answer === finalTarget,
    hints: [
      { text: `מהצפרדע ליעד יש ${num(distance)}` },
      { text: 'הסכום של הקפיצות שנבחרו מוצג מתחת' },
      { text: `הקפיצה הראשונה היא ${num(route[0] ?? 0)}` },
      { text: 'כך מגיעים ליעד' },
    ],
    explain: [
      `הדרך מהצפרדע ליעד היא ${num(distance)}.`,
      `${route.map((k) => num(k)).join(' ועוד ')} ביחד נותנים ${num(distance)}.`,
    ],
  }
}

function mount(logic: MissionLogic<JumpsConfig, number>, onChange: () => void): Board<number> {
  const { from, to, tickStep, labelEvery, start, target, keys, route } = logic.config
  const line = numberLine({ from, to, tickStep, labelEvery })
  line.flag(target)

  let position = start
  let moved = false
  const frog = line.chest(start, () => { /* the frog only moves by jumps */ }, 'frog')
  const total = document.createElement('p')
  total.className = 'running-total'

  const paintTotal = (): void => {
    total.textContent = moved ? `${num(position - start)}` : ''
  }

  const jump = (key: number): void => {
    const next = position + key
    if (next < from || next > to) return
    line.arrow(position, next, (key > 0 ? '+' : '') + key, key >= 0 ? 'plus' : 'minus')
    position = next
    moved = true
    frog.set(position)
    paintTotal()
    onChange()
  }

  const reset = (): void => {
    line.clearArrows()
    position = start
    moved = false
    frog.set(start)
    paintTotal()
    onChange()
  }

  line.tray([
    ...keys.map((key) => ({ label: (key > 0 ? '+' : '') + key, onClick: () => jump(key) })),
    { label: 'התחלה', onClick: reset },
  ])
  line.el.append(total)

  return {
    el: line.el,
    answer: () => (moved ? position : null),
    hint(level) {
      if (level === 1) line.band(Math.min(start, target), Math.max(start, target))
      if (level === 2) total.classList.add('lit')
      if (level === 3) { reset(); jump(route[0] ?? 0) }
      if (level >= 4) { reset(); for (const key of route) jump(key) }
    },
    demonstrate() {
      reset()
      for (const key of route) jump(key)
    },
    place: (value) => {
      position = value
      moved = true
      frog.set(value)
      paintTotal()
      onChange()
    },
    destroy: () => line.destroy(),
  }
}

export const jumps: MissionModule<JumpsConfig, number> = { kind: 'jumps', generate, mount }
