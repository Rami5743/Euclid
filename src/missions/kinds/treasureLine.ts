import { makeRng } from '../../battle/rng'
import { numberLine, type NumberLineOptions } from '../boards/numberLine'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface TreasureConfig extends NumberLineOptions {
  target: number
}

const STYLES: NumberLineOptions[] = [
  { from: 0, to: 20, tickStep: 1, labelEvery: 5 },
  { from: -10, to: 10, tickStep: 1, labelEvery: 5 },
  { from: 0, to: 100, tickStep: 5, labelEvery: 4 },
  { from: -50, to: 50, tickStep: 5, labelEvery: 5 },
]

export function generate(seed: number): MissionLogic<TreasureConfig, number> {
  const rng = makeRng(seed)
  const style = STYLES[Math.floor(rng() * STYLES.length)]!
  const ticks = Math.round((style.to - style.from) / style.tickStep)

  // A tick that carries no number of its own, so it has to be counted to.
  const candidates: number[] = []
  for (let i = 1; i < ticks; i++) {
    if (i % style.labelEvery !== 0) candidates.push(style.from + i * style.tickStep)
  }
  const target = candidates[Math.floor(rng() * candidates.length)]!
  const gap = style.tickStep * style.labelEvery

  return {
    config: { ...style, target },
    solution: target,
    check: (answer) => answer === target,
    hints: [
      { text: 'היעד נמצא בין שני המספרים הכתובים האלה' },
      { text: `בין סימון לסימון יש ${num(style.tickStep)}` },
      { text: 'ספור את הסימונים מהמספר הכתוב הקרוב' },
      { text: 'כך מגיעים ליעד' },
    ],
    explain: [
      `בין שני מספרים כתובים יש ${num(gap)}.`,
      `כל סימון קטן שווה ${num(style.tickStep)}.`,
      `היעד הוא ${num(target)}.`,
    ],
  }
}

function mount(logic: MissionLogic<TreasureConfig, number>, onChange: () => void): Board<number> {
  const { from, to, tickStep, labelEvery, target } = logic.config
  const line = numberLine({ from, to, tickStep, labelEvery })
  line.flag(target)

  let current: number | null = null
  const chest = line.chest(from, (value) => {
    current = value
    onChange()
  })
  current = null

  const nearestLabelBelow = from + Math.floor((target - from) / (tickStep * labelEvery)) * tickStep * labelEvery
  const nearestLabelAbove = nearestLabelBelow + tickStep * labelEvery

  return {
    el: line.el as unknown as HTMLElement,
    answer: () => current,
    hint(level) {
      if (level === 1) line.band(nearestLabelBelow, nearestLabelAbove)
      if (level === 2) line.bracket(from, from + tickStep, String(tickStep))
      if (level === 3) line.count(nearestLabelBelow, target)
      if (level >= 4) chest.set(target)
    },
    demonstrate() {
      line.count(nearestLabelBelow, target)
      chest.set(target)
    },
    place: (value) => chest.set(value),
    destroy: () => line.destroy(),
  }
}

export const treasureLine: MissionModule<TreasureConfig, number> = {
  kind: 'treasure-line',
  generate,
  mount,
}
