import { makeRng } from '../../battle/rng'
import { grid } from '../boards/grid'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface Linear {
  /** y = slope · x + offset */
  slope: number
  offset: number
}

export interface ShiftConfig {
  base: Linear
  moved: Linear
  options: Linear[]
  correct: number
  range: number
}

export function write(line: Linear): string {
  const head = line.slope === 1 ? 'x' : line.slope === -1 ? '−x' : `${line.slope < 0 ? '−' : ''}${Math.abs(line.slope)}x`
  if (line.offset === 0) return head
  return line.offset > 0 ? `${head} + ${line.offset}` : `${head} − ${Math.abs(line.offset)}`
}

export function generate(seed: number): MissionLogic<ShiftConfig, number> {
  const rng = makeRng(seed)
  const range = 6
  const base: Linear = { slope: rng() < 0.5 ? 1 : 2, offset: 0 }
  const kind = Math.floor(rng() * 3)
  const shift = 2 + Math.floor(rng() * 3)
  const moved: Linear = kind === 0
    ? { slope: base.slope, offset: shift }
    : kind === 1
      ? { slope: base.slope, offset: -shift }
      : { slope: -base.slope, offset: 0 }

  const options: Linear[] = [moved]
  const candidates: Linear[] = [
    { slope: base.slope, offset: shift },
    { slope: base.slope, offset: -shift },
    { slope: -base.slope, offset: 0 },
    { slope: base.slope, offset: shift + 1 },
    { slope: -base.slope, offset: shift },
  ]
  for (const candidate of candidates) {
    if (options.length >= 4) break
    if (!options.some((o) => o.slope === candidate.slope && o.offset === candidate.offset)) options.push(candidate)
  }
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    const t = options[i]!
    options[i] = options[j]!
    options[j] = t
  }
  const correct = options.findIndex((o) => o.slope === moved.slope && o.offset === moved.offset)

  return {
    config: { base, moved, options, correct, range },
    solution: correct,
    check: (answer) => answer === correct,
    hints: [
      { text: `איפה הגרף חותך את הציר האנכי` },
      { text: `${num('x')} = ${num(0)} נותן ${num(moved.offset)}` },
      { text: moved.slope === base.slope ? 'אותה נטייה, רק גובה אחר' : 'הנטייה התהפכה' },
      { text: `הפונקציה היא ${num(write(moved))}` },
    ],
    explain: [
      `הגרף המקורי הוא ${num(write(base))}.`,
      moved.slope === base.slope
        ? `הוא הוזז ב־${num(moved.offset)} למעלה או למטה, ולכן ${num(write(moved))}.`
        : `הוא שוקף סביב הציר האופקי, ולכן ${num(write(moved))}.`,
    ],
  }
}

function mount(logic: MissionLogic<ShiftConfig, number>, onChange: () => void): Board<number> {
  const { base, moved, options, range } = logic.config
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap shift-board'

  const board = grid({ range })
  board.curve((x) => base.slope * x + base.offset, 'base')
  board.curve((x) => moved.slope * x + moved.offset, 'moved')
  wrap.append(board.el)

  let picked: number | null = null
  const choices = document.createElement('div')
  choices.className = 'machine-choices'
  const paint = (): void => {
    choices.replaceChildren()
    options.forEach((option, index) => {
      const button = document.createElement('button')
      button.type = 'button'
      button.className = `btn choice${picked === index ? ' primary' : ''}`
      button.textContent = write(option)
      button.addEventListener('click', () => { picked = index; paint(); onChange() })
      choices.append(button)
    })
  }
  paint()
  wrap.append(choices)

  return {
    el: wrap,
    answer: () => picked,
    hint(level) {
      if (level === 1) board.guide(0, 'x')
      if (level === 2) board.dot({ x: 0, y: moved.offset }, 'lit')
      if (level === 3) board.dot({ x: 1, y: moved.slope + moved.offset }, 'lit')
      if (level >= 4) { picked = logic.solution; paint(); onChange() }
    },
    demonstrate() { picked = logic.solution; paint(); onChange() },
    place: (index) => { picked = index; paint(); onChange() },
    destroy() { board.destroy(); wrap.remove() },
  }
}

export const shift: MissionModule<ShiftConfig, number> = { kind: 'shift', generate, mount }
