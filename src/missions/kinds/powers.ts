import { makeRng } from '../../battle/rng'
import { chainBoard } from '../boards/chain'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface PowersConfig {
  base: number
  exponent: number
  target: number
  keys: number[]
}

export function generate(seed: number): MissionLogic<PowersConfig, number> {
  const rng = makeRng(seed)
  const bases = [2, 3, 5]
  const base = bases[Math.floor(rng() * bases.length)]!
  const exponent = base === 2 ? 4 + Math.floor(rng() * 4) : base === 3 ? 3 + Math.floor(rng() * 2) : 2 + Math.floor(rng() * 2)
  const target = base ** exponent
  const keys = [...new Set([base, ...bases])].sort((a, b) => a - b)

  return {
    config: { base, exponent, target, keys },
    solution: target,
    check: (answer) => answer === target,
    hints: [
      { text: `${num(target)} הוא חזקה של ${num(base)}` },
      { text: `${num(base)} × ${num(base)} = ${num(base * base)}` },
      { text: `צריך ${num(exponent)} פעמים ${num(base)}` },
      { text: 'כך בונים את המספר' },
    ],
    explain: [
      `${num(target)} = ${num(`${base}^${exponent}`)}.`,
      `${Array.from({ length: exponent }, () => num(base)).join(' × ')} = ${num(target)}.`,
    ],
  }
}

function mount(logic: MissionLogic<PowersConfig, number>, onChange: () => void): Board<number> {
  const { base, exponent, target, keys } = logic.config
  const board = chainBoard()
  board.goal(`${target}`)

  let value = 1
  let steps: string[] = ['1']
  let touched = false

  const paint = (): void => {
    board.setValue(value)
    board.setChain(steps)
    board.matched(value === target)
  }

  const times = (k: number): void => {
    if (value * k > target * 100) return
    value *= k
    steps.push(`×${k}`)
    touched = true
    paint()
    onChange()
  }

  const reset = (): void => {
    value = 1
    steps = ['1']
    touched = false
    paint()
    onChange()
  }

  board.keys([
    ...keys.map((k) => ({ label: `× ${k}`, onClick: () => times(k) })),
    { label: 'התחלה', onClick: reset },
  ])
  paint()

  return {
    el: board.el,
    answer: () => (touched ? value : null),
    hint(level) {
      if (level === 1) board.mark(`${target} = ?`)
      if (level === 2) board.mark(`${base} × ${base} = ${base * base}`)
      if (level === 3) { reset(); times(base); times(base) }
      if (level >= 4) { reset(); for (let i = 0; i < exponent; i++) times(base) }
    },
    demonstrate() {
      reset()
      for (let i = 0; i < exponent; i++) times(base)
    },
    place: (v) => { value = v; touched = true; steps = [String(v)]; paint(); onChange() },
    destroy: () => board.destroy(),
  }
}

export const powers: MissionModule<PowersConfig, number> = { kind: 'powers', generate, mount }
