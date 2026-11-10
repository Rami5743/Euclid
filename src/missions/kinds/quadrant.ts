import { makeRng } from '../../battle/rng'
import { grid, type Point } from '../boards/grid'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface QuadrantConfig {
  range: number
  target: Point
}

export function generate(seed: number): MissionLogic<QuadrantConfig, Point> {
  const rng = makeRng(seed)
  const range = 6
  const pick = (): number => {
    const size = 1 + Math.floor(rng() * (range - 1))
    return rng() < 0.5 ? -size : size
  }
  const target = { x: pick(), y: pick() }

  return {
    config: { range, target },
    solution: target,
    check: (answer) => answer.x === target.x && answer.y === target.y,
    hints: [
      { text: 'הקו של הצופה שעל הציר האופקי' },
      { text: 'הקו של הצופה שעל הציר האנכי' },
      { text: 'האוצר נמצא במפגש' },
      { text: `הנקודה היא ${num(`(${target.x}, ${target.y})`)}` },
    ],
    explain: [
      `הצופה על הציר האופקי עומד ב־${num(target.x)}, והצופה על הציר האנכי ב־${num(target.y)}.`,
      `המפגש הוא ${num(`(${target.x}, ${target.y})`)}.`,
    ],
  }
}

function mount(logic: MissionLogic<QuadrantConfig, Point>, onChange: () => void): Board<Point> {
  const { range, target } = logic.config
  const board = grid({ range })
  board.scout(target.x, 'x')
  board.scout(target.y, 'y')

  let answer: Point | null = null
  const pick = board.pick((p) => { answer = p; onChange() })

  return {
    el: board.el,
    answer: () => answer,
    hint(level) {
      if (level === 1) board.guide(target.x, 'x')
      if (level === 2) board.guide(target.y, 'y')
      if (level === 3) board.dot(target, 'lit')
      if (level >= 4) pick.set(target)
    },
    demonstrate() {
      board.dot(target, 'lit')
      pick.set(target)
    },
    place: (p) => pick.set(p),
    destroy: () => board.destroy(),
  }
}

export const quadrant: MissionModule<QuadrantConfig, Point> = { kind: 'quadrant', generate, mount }
