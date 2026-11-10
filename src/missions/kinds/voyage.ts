import { makeRng } from '../../battle/rng'
import { numberLine, type NumberLineOptions } from '../boards/numberLine'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface VoyageConfig extends NumberLineOptions {
  start: number
  /** the moves, drawn above the line from the outset */
  moves: number[]
}

/** A line that frames the whole voyage, with round numbers on it. */
export function frame(
  positions: number[],
  tickStep: number,
  labelEvery: number,
): NumberLineOptions {
  const gap = tickStep * labelEvery
  const low = Math.min(...positions) - gap
  const high = Math.max(...positions) + gap
  return {
    tickStep,
    labelEvery,
    from: Math.floor(low / gap) * gap,
    to: Math.ceil(high / gap) * gap,
  }
}

export function generate(seed: number): MissionLogic<VoyageConfig, number> {
  const rng = makeRng(seed)
  const tickStep = rng() < 0.6 ? 1 : 2
  const count = 3 + Math.floor(rng() * 2)
  const start = tickStep * (rng() < 0.5 ? 0 : -2)

  const moves: number[] = []
  const stops = [start]
  for (let i = 0; i < count; i++) {
    const size = tickStep * (2 + Math.floor(rng() * 5))
    const sign = rng() < 0.45 ? -1 : 1
    moves.push(sign * size)
    stops.push(stops[stops.length - 1]! + sign * size)
  }
  // A voyage that ends where it began would have nothing to ask.
  if (stops[stops.length - 1] === start) {
    const extra = tickStep * 3
    moves.push(extra)
    stops.push(stops[stops.length - 1]! + extra)
  }
  const end = stops[stops.length - 1]!
  const line = frame(stops, tickStep, 5)

  const sum = moves.map((m) => num(m)).join(' , ')
  return {
    config: { ...line, start, moves },
    solution: end,
    check: (answer) => answer === end,
    hints: [
      { text: 'החץ הראשון' },
      { text: 'אחרי החץ הראשון' },
      { text: 'אחרי שני החצים הראשונים' },
      { text: 'כך נגמר המסע' },
    ],
    explain: [
      `${sum}`,
      `הסכום שלהם הוא ${num(end - start)}.`,
      `מ־${num(start)} מגיעים ל־${num(end)}.`,
    ],
  }
}

function mount(logic: MissionLogic<VoyageConfig, number>, onChange: () => void): Board<number> {
  const { from, to, tickStep, labelEvery, start, moves } = logic.config
  const line = numberLine({ from, to, tickStep, labelEvery })

  // The whole voyage is drawn from the outset; only its end is missing.
  const stops: number[] = [start]
  let at = start
  const arrows = moves.map((move, index) => {
    const next = at + move
    const g = line.arrow(at, next, (move > 0 ? '+' : '') + move, move >= 0 ? 'plus' : 'minus', index % 2, index + 1)
    at = next
    stops.push(next)
    return g
  })
  const ship = line.token(start, 'ship')

  let answer: number | null = null
  const marker = line.chest(start, (value) => { answer = value; onChange() }, 'chest')

  return {
    el: line.el,
    answer: () => answer,
    hint(level) {
      if (level === 1) arrows[0]?.classList.add('lit')
      if (level === 2) ship.set(stops[1] ?? start)
      if (level === 3) ship.set(stops[2] ?? stops[stops.length - 1] ?? start)
      if (level >= 4) {
        for (const g of arrows) g.classList.add('lit')
        ship.set(stops[stops.length - 1]!)
        marker.set(stops[stops.length - 1]!)
      }
    },
    demonstrate() {
      ship.set(stops[stops.length - 1]!)
      marker.set(stops[stops.length - 1]!)
    },
    place: (value) => marker.set(value),
    destroy: () => line.destroy(),
  }
}

export const voyage: MissionModule<VoyageConfig, number> = { kind: 'voyage', generate, mount }
