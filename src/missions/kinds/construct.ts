import { makeRng } from '../../battle/rng'
import {
  circleCross, constructBoard, distance, midpoint, same, type Pt,
} from '../boards/construct'
import type { Board, MissionLogic, MissionModule } from '../types'

export type ConstructGoal = 'midpoint' | 'perpendicular' | 'equilateral'

export interface ConstructConfig {
  goal: ConstructGoal
  a: Pt
  b: Pt
}

/** The answer is the state of the board, which the check reads. */
export interface ConstructAnswer {
  points: Pt[]
  lines: { a: Pt; b: Pt }[]
}

function perpendicularThrough(config: ConstructConfig, answer: ConstructAnswer): boolean {
  const { a, b } = config
  const mid = midpoint(a, b)
  const dx = b.x - a.x
  const dy = b.y - a.y
  return answer.lines.some((line) => {
    const lx = line.b.x - line.a.x
    const ly = line.b.y - line.a.y
    const dot = lx * dx + ly * dy
    const length = Math.hypot(lx, ly) * Math.hypot(dx, dy)
    if (length === 0) return false
    if (Math.abs(dot / length) > 0.03) return false
    // and it has to pass through the middle of the segment
    const area = Math.abs((line.b.x - line.a.x) * (line.a.y - mid.y) - (line.a.x - mid.x) * (line.b.y - line.a.y))
    return area / Math.hypot(lx, ly) < 6
  })
}

export function satisfied(config: ConstructConfig, answer: ConstructAnswer): boolean {
  const { goal, a, b } = config
  if (goal === 'midpoint') {
    return answer.points.some((p) => same(p, midpoint(a, b), 6))
  }
  if (goal === 'perpendicular') {
    return perpendicularThrough(config, answer)
  }
  const side = distance(a, b)
  return answer.points.some((p) =>
    Math.abs(distance(p, a) - side) < 8 && Math.abs(distance(p, b) - side) < 8)
}

function build(seed: number, goal: ConstructGoal): MissionLogic<ConstructConfig, ConstructAnswer> {
  const rng = makeRng(seed)
  const y = 300 + Math.floor(rng() * 80) - 40
  const length = 260 + Math.floor(rng() * 140)
  const a: Pt = { x: 450 - length / 2, y }
  const b: Pt = { x: 450 + length / 2, y }
  const config: ConstructConfig = { goal, a, b }

  const hints: Record<ConstructGoal, string[]> = {
    midpoint: ['מעגל סביב הנקודה הראשונה דרך השנייה', 'ומעגל סביב השנייה דרך הראשונה', 'ישר בין שתי נקודות המפגש', 'הוא חותך את הקטע באמצע'],
    perpendicular: ['מעגל סביב הנקודה הראשונה דרך השנייה', 'ומעגל סביב השנייה דרך הראשונה', 'ישר בין שתי נקודות המפגש', 'הוא מאונך לקטע'],
    equilateral: ['מעגל סביב הנקודה הראשונה דרך השנייה', 'ומעגל סביב השנייה דרך הראשונה', 'נקודת המפגש רחוקה אותו דבר משתיהן', 'מחברים אותה לשתי הנקודות'],
  }
  const explain: Record<ConstructGoal, string[]> = {
    midpoint: [
      'שני מעגלים ברדיוס שווה נפגשים בשתי נקודות.',
      'הישר שמחבר אותן חוצה את הקטע ומאונך לו.',
    ],
    perpendicular: [
      'שני מעגלים ברדיוס שווה נפגשים בשתי נקודות.',
      'הישר שמחבר אותן מאונך לקטע.',
    ],
    equilateral: [
      'כל נקודה על המעגל רחוקה מהמרכז כאורך הקטע.',
      'נקודת המפגש של שני המעגלים רחוקה כך משתי הקצוות, ולכן המשולש שווה צלעות.',
    ],
  }

  return {
    config,
    solution: { points: [], lines: [] },
    check: (answer) => satisfied(config, answer),
    hints: hints[goal].map((text) => ({ text })),
    explain: explain[goal],
  }
}

export function generateMidpoint(seed: number): MissionLogic<ConstructConfig, ConstructAnswer> {
  return build(seed, 'midpoint')
}
export function generatePerpendicular(seed: number): MissionLogic<ConstructConfig, ConstructAnswer> {
  return build(seed, 'perpendicular')
}
export function generateEquilateral(seed: number): MissionLogic<ConstructConfig, ConstructAnswer> {
  return build(seed, 'equilateral')
}

function mount(logic: MissionLogic<ConstructConfig, ConstructAnswer>, onChange: () => void): Board<ConstructAnswer> {
  const { a, b, goal } = logic.config
  const board = constructBoard(onChange)
  board.addPoint(a, 'A')
  board.addPoint(b, 'B')
  board.addLine(a, b)

  const read = (): ConstructAnswer => ({ points: board.points(), lines: board.lines() })

  const steps = (): void => {
    board.addCircle(a, b)
    board.addCircle(b, a)
    const crossings = circleCross({ c: a, r: distance(a, b) }, { c: b, r: distance(a, b) })
    if (goal === 'equilateral') {
      const apex = crossings[0]
      if (apex) { board.addLine(a, apex); board.addLine(b, apex) }
    } else if (crossings.length === 2) {
      board.addLine(crossings[0]!, crossings[1]!)
    }
  }

  return {
    el: board.el,
    answer: () => (board.drawn() > 1 ? read() : null),
    hint(level) {
      if (level === 1) board.addCircle(a, b)
      if (level === 2) board.addCircle(b, a)
      if (level >= 3) steps()
    },
    demonstrate: steps,
    destroy: () => board.destroy(),
  }
}

export const buildMidpoint: MissionModule<ConstructConfig, ConstructAnswer> = {
  kind: 'build-midpoint', generate: generateMidpoint, mount,
}
export const buildPerpendicular: MissionModule<ConstructConfig, ConstructAnswer> = {
  kind: 'build-perpendicular', generate: generatePerpendicular, mount,
}
export const buildEquilateral: MissionModule<ConstructConfig, ConstructAnswer> = {
  kind: 'build-equilateral', generate: generateEquilateral, mount,
}
