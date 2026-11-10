import { makeRng } from '../../battle/rng'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface Rule {
  a: number
  b: number
}

export interface MachineConfig {
  rule: Rule
  options: Rule[]
  correct: number
}

export function apply(rule: Rule, x: number): number {
  return rule.a * x + rule.b
}

export function write(rule: Rule): string {
  const head = rule.a === 1 ? 'x' : `${rule.a}x`
  if (rule.b === 0) return head
  return rule.b > 0 ? `${head} + ${rule.b}` : `${head} − ${Math.abs(rule.b)}`
}

export function generate(seed: number): MissionLogic<MachineConfig, number> {
  const rng = makeRng(seed)
  const rule: Rule = {
    a: 2 + Math.floor(rng() * 4),
    b: Math.floor(rng() * 9) - 4,
  }
  const options: Rule[] = [rule]
  while (options.length < 4) {
    const candidate: Rule = {
      a: Math.max(1, rule.a + Math.floor(rng() * 3) - 1),
      b: rule.b + Math.floor(rng() * 5) - 2,
    }
    if (!options.some((o) => o.a === candidate.a && o.b === candidate.b)) options.push(candidate)
  }
  // Shuffle, deterministically.
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    const t = options[i]!
    options[i] = options[j]!
    options[j] = t
  }
  const correct = options.findIndex((o) => o.a === rule.a && o.b === rule.b)

  return {
    config: { rule, options, correct },
    solution: correct,
    check: (answer) => answer === correct,
    hints: [
      { text: 'הכנס מספר וראה מה יוצא' },
      { text: `${num(1)} נותן ${num(apply(rule, 1))}` },
      { text: `${num(2)} נותן ${num(apply(rule, 2))}, כל צעד מוסיף ${num(rule.a)}` },
      { text: `הכלל הוא ${num(write(rule))}` },
    ],
    explain: [
      `הכלל הוא ${num(write(rule))}.`,
      `${num(1)} → ${num(apply(rule, 1))} , ${num(2)} → ${num(apply(rule, 2))} , ${num(3)} → ${num(apply(rule, 3))}.`,
    ],
  }
}

function mount(logic: MissionLogic<MachineConfig, number>, onChange: () => void): Board<number> {
  const { rule, options } = logic.config
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap machine-board'

  const machine = document.createElement('div')
  machine.className = 'machine'
  machine.innerHTML = `
    <svg viewBox="0 0 320 180" class="machine-art" aria-hidden="true">
      <rect x="40" y="30" width="240" height="120" rx="18" class="machine-body"/>
      <circle cx="110" cy="90" r="26" class="machine-gear"/>
      <circle cx="210" cy="90" r="18" class="machine-gear"/>
      <path d="M0 90 h40 M280 90 h40" class="machine-pipe"/>
    </svg>`

  const feed = document.createElement('div')
  feed.className = 'tray'
  const table = document.createElement('div')
  table.className = 'machine-table'
  const choices = document.createElement('div')
  choices.className = 'machine-choices'

  wrap.append(machine, feed, table, choices)

  const fed: number[] = []
  const paintTable = (): void => {
    table.replaceChildren()
    for (const x of fed) {
      const row = document.createElement('span')
      row.className = 'machine-row'
      row.textContent = `${x} → ${apply(rule, x)}`
      table.append(row)
    }
  }

  const feedNumber = (x: number): void => {
    if (!fed.includes(x)) fed.push(x)
    paintTable()
  }

  for (const x of [1, 2, 3, 4, 5]) {
    const key = document.createElement('button')
    key.type = 'button'
    key.className = 'btn small tray-key'
    key.textContent = String(x)
    key.addEventListener('click', () => feedNumber(x))
    feed.append(key)
  }

  let picked: number | null = null
  const paintChoices = (): void => {
    choices.replaceChildren()
    options.forEach((option, index) => {
      const button = document.createElement('button')
      button.type = 'button'
      button.className = `btn choice${picked === index ? ' primary' : ''}`
      button.textContent = write(option)
      button.addEventListener('click', () => { picked = index; paintChoices(); onChange() })
      choices.append(button)
    })
  }
  paintChoices()

  return {
    el: wrap,
    answer: () => picked,
    hint(level) {
      if (level === 1) feedNumber(1)
      if (level === 2) feedNumber(2)
      if (level === 3) { feedNumber(3); feedNumber(4) }
      if (level >= 4) { picked = logic.solution; paintChoices(); onChange() }
    },
    demonstrate() { picked = logic.solution; paintChoices(); onChange() },
    place: (index) => { picked = index; paintChoices(); onChange() },
    destroy: () => wrap.remove(),
  }
}

export const machine: MissionModule<MachineConfig, number> = { kind: 'machine', generate, mount }
