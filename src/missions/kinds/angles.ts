import { makeRng } from '../../battle/rng'
import { angleBoard, pointOn } from '../boards/angles'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export type AngleShape = 'aim' | 'straight' | 'triangle' | 'isosceles'

export interface AngleConfig {
  shape: AngleShape
  /** the angle the player has to set */
  target: number
  /** the angles written on the figure */
  given: number[]
}

const A = { x: 130, y: 470 }
const B = { x: 530, y: 470 }

function logicFor(shape: AngleShape, target: number, given: number[]): MissionLogic<AngleConfig, number> {
  const hints: Record<AngleShape, string[]> = {
    aim: ['הקשת מראה את הזווית', 'הסימונים על המד הם של ‎10°‎', 'הזווית בין ‎' + (Math.floor(target / 10) * 10) + '°‎ ל־' + (Math.ceil(target / 10) * 10) + '°', `הזווית היא ${num(target + '°')}`],
    straight: ['שתי הזוויות יחד על ישר', `יחד הן ${num('180°')}`, `${num('180°')} − ${num(given[0] + '°')}`, `הזווית היא ${num(target + '°')}`],
    triangle: ['שלוש הזוויות של משולש', `יחד הן ${num('180°')}`, `${num('180°')} − ${num(given[0] + '°')} − ${num(given[1] + '°')}`, `הזווית היא ${num(target + '°')}`],
    isosceles: ['שתי זוויות הבסיס שוות', `יחד עם ${num(given[0] + '°')} הן ${num('180°')}`, `(${num('180°')} − ${num(given[0] + '°')}) : ${num(2)}`, `הזווית היא ${num(target + '°')}`],
  }
  const explain: Record<AngleShape, string[]> = {
    aim: [`הזווית היא ${num(target + '°')}.`],
    straight: [
      `שתי זוויות צמודות משלימות ל־${num('180°')}.`,
      `${num('180°')} − ${num(given[0] + '°')} = ${num(target + '°')}.`,
    ],
    triangle: [
      `סכום הזוויות במשולש הוא ${num('180°')}.`,
      `${num('180°')} − ${num(given[0] + '°')} − ${num(given[1] + '°')} = ${num(target + '°')}.`,
    ],
    isosceles: [
      `במשולש שווה שוקיים שתי זוויות הבסיס שוות.`,
      `(${num('180°')} − ${num(given[0] + '°')}) : ${num(2)} = ${num(target + '°')}.`,
    ],
  }

  return {
    config: { shape, target, given },
    solution: target,
    check: (answer) => answer === target,
    hints: hints[shape].map((text) => ({ text })),
    explain: explain[shape],
  }
}

export function generateAim(seed: number): MissionLogic<AngleConfig, number> {
  const rng = makeRng(seed)
  const target = 15 + Math.floor(rng() * 31) * 5
  return logicFor('aim', Math.min(165, target), [])
}

export function generateStraight(seed: number): MissionLogic<AngleConfig, number> {
  const rng = makeRng(seed)
  const given = 20 + Math.floor(rng() * 28) * 5
  return logicFor('straight', 180 - given, [given])
}

export function generateTriangle(seed: number): MissionLogic<AngleConfig, number> {
  const rng = makeRng(seed)
  let a = 0
  let b = 0
  do {
    a = 25 + Math.floor(rng() * 14) * 5
    b = 25 + Math.floor(rng() * 14) * 5
  } while (a + b > 150)
  return logicFor('triangle', 180 - a - b, [a, b])
}

export function generateIsosceles(seed: number): MissionLogic<AngleConfig, number> {
  const rng = makeRng(seed)
  const apex = 20 + Math.floor(rng() * 14) * 10
  return logicFor('isosceles', (180 - apex) / 2, [apex])
}

function drawFigure(board: ReturnType<typeof angleBoard>, config: AngleConfig): void {
  const { shape, target, given } = config
  if (shape === 'aim') {
    board.line(A.x - 40, A.y, A.x + 420, A.y, 'base')
    board.ray(A.x, A.y, target, 380, 'live')
    board.arc(A.x, A.y, 90, 0, target, 'given')
    board.dot(A.x, A.y)
    return
  }
  if (shape === 'straight') {
    board.line(A.x - 60, A.y, B.x + 60, A.y, 'base')
    const vertex = { x: (A.x + B.x) / 2, y: A.y }
    board.ray(vertex.x, vertex.y, given[0]!, 300, 'live')
    board.arc(vertex.x, vertex.y, 76, 0, given[0]!, 'given')
    board.label(...labelAt(vertex, given[0]! / 2, 112), `${given[0]}°`)
    board.arc(vertex.x, vertex.y, 110, given[0]!, 180, 'wanted')
    board.label(...labelAt(vertex, (given[0]! + 180) / 2, 150), '?')
    board.dot(vertex.x, vertex.y)
    return
  }
  const [first, second] = shape === 'triangle' ? [given[0]!, given[1]!] : [(180 - given[0]!) / 2, (180 - given[0]!) / 2]
  const gamma = 180 - first - second
  const ab = B.x - A.x
  const ac = (ab * Math.sin((second * Math.PI) / 180)) / Math.sin((gamma * Math.PI) / 180)
  const C = pointOn(A.x, A.y, first, ac)

  board.line(A.x, A.y, B.x, B.y, 'base')
  board.line(A.x, A.y, C.x, C.y, 'base')
  board.line(B.x, B.y, C.x, C.y, 'base')
  board.dot(A.x, A.y)
  board.dot(B.x, B.y)
  board.dot(C.x, C.y)

  if (shape === 'triangle') {
    board.arc(A.x, A.y, 66, 0, first, 'given')
    board.label(...labelAt(A, first / 2, 100), `${first}°`)
    board.arc(B.x, B.y, 66, 180 - second, 180, 'given')
    board.label(...labelAt(B, 180 - second / 2, 100), `${second}°`)
    const toA = Math.atan2(A.y - C.y, A.x - C.x) * (180 / Math.PI)
    const toB = Math.atan2(B.y - C.y, B.x - C.x) * (180 / Math.PI)
    board.arc(C.x, C.y, 60, -toB, -toA, 'wanted')
    board.label(C.x, C.y + 54, '?')
  } else {
    const toA = Math.atan2(A.y - C.y, A.x - C.x) * (180 / Math.PI)
    const toB = Math.atan2(B.y - C.y, B.x - C.x) * (180 / Math.PI)
    board.arc(C.x, C.y, 60, -toB, -toA, 'given')
    board.label(C.x, C.y + 56, `${given[0]}°`)
    board.arc(A.x, A.y, 66, 0, first, 'wanted')
    board.label(...labelAt(A, first / 2, 104), '?')
    // the two legs are marked as equal
    board.label((A.x + C.x) / 2 - 18, (A.y + C.y) / 2, '//')
    board.label((B.x + C.x) / 2 + 18, (B.y + C.y) / 2, '//')
  }
}

function labelAt(vertex: { x: number; y: number }, degrees: number, radius: number): [number, number] {
  const p = pointOn(vertex.x, vertex.y, degrees, radius)
  return [p.x, p.y + 10]
}

function mount(logic: MissionLogic<AngleConfig, number>, onChange: () => void): Board<number> {
  const board = angleBoard()
  drawFigure(board, logic.config)

  let touched = false
  const dial = board.dial(0, () => { touched = true; onChange() })

  return {
    el: board.el,
    answer: () => (touched ? dial.get() : null),
    hint(level) {
      const { shape, given, target } = logic.config
      if (level === 1) board.mark(shape === 'triangle' ? '180°' : shape === 'isosceles' ? '= =' : '180°')
      if (level === 2) board.mark(shape === 'aim' ? '10°' : '180°')
      if (level === 3) {
        if (shape === 'straight') board.mark(`180 − ${given[0]}`)
        else if (shape === 'triangle') board.mark(`180 − ${given[0]} − ${given[1]}`)
        else if (shape === 'isosceles') board.mark(`(180 − ${given[0]}) : 2`)
        else board.mark(`${Math.floor(target / 10) * 10}…${Math.ceil(target / 10) * 10}`)
      }
      if (level >= 4) dial.set(target)
    },
    demonstrate() { dial.set(logic.solution) },
    place: (value) => dial.set(value),
    destroy: () => board.destroy(),
  }
}

export const aimAngle: MissionModule<AngleConfig, number> = { kind: 'angle-aim', generate: generateAim, mount }
export const straightAngle: MissionModule<AngleConfig, number> = { kind: 'angle-straight', generate: generateStraight, mount }
export const triangleAngle: MissionModule<AngleConfig, number> = { kind: 'angle-triangle', generate: generateTriangle, mount }
export const isoscelesAngle: MissionModule<AngleConfig, number> = { kind: 'angle-isosceles', generate: generateIsosceles, mount }
