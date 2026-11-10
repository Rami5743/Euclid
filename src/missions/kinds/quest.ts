import { makeRng } from '../../battle/rng'
import { keypad } from '../boards/keypad'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface QuestRow {
  /** how many of each of the two tokens stand in this row */
  a: number
  b: number
  /** the total written at the end of the row, or null for the row in question */
  total: number | null
}

export interface QuestConfig {
  rows: QuestRow[]
  /** what each token is worth */
  valueA: number
  valueB: number
}

export function totalOf(row: QuestRow, valueA: number, valueB: number): number {
  return row.a * valueA + row.b * valueB
}

export function generate(seed: number): MissionLogic<QuestConfig, number> {
  const rng = makeRng(seed)
  const valueA = 2 + Math.floor(rng() * 8)
  const valueB = 1 + Math.floor(rng() * 9)

  const first: QuestRow = { a: 2 + Math.floor(rng() * 2), b: 0, total: null }
  first.total = totalOf(first, valueA, valueB)
  const second: QuestRow = { a: 1, b: 1 + Math.floor(rng() * 2), total: null }
  second.total = totalOf(second, valueA, valueB)
  // The row in question must not repeat a row that is already answered.
  let asked: QuestRow = { a: 1, b: 1, total: null }
  for (let attempt = 0; attempt < 20; attempt++) {
    asked = { a: 1 + Math.floor(rng() * 3), b: 1 + Math.floor(rng() * 3), total: null }
    const repeats = (asked.a === first.a && asked.b === first.b)
      || (asked.a === second.a && asked.b === second.b)
    if (!repeats) break
  }
  if ((asked.a === second.a && asked.b === second.b) || (asked.a === first.a && asked.b === first.b)) {
    asked = { a: second.a + 1, b: second.b + 1, total: null }
  }
  const answer = totalOf(asked, valueA, valueB)

  return {
    config: { rows: [first, second, asked], valueA, valueB },
    solution: answer,
    check: (value) => value === answer,
    hints: [
      { text: 'השורה הראשונה מגלה את הראשון' },
      { text: `הראשון שווה ${num(valueA)}` },
      { text: `השני שווה ${num(valueB)}` },
      { text: `${num(asked.a)} × ${num(valueA)} + ${num(asked.b)} × ${num(valueB)} = ${num(answer)}` },
    ],
    explain: [
      `הראשון שווה ${num(valueA)} והשני שווה ${num(valueB)}.`,
      `${num(asked.a)} × ${num(valueA)} + ${num(asked.b)} × ${num(valueB)} = ${num(answer)}.`,
    ],
  }
}

function tokenRow(row: QuestRow): HTMLElement {
  const line = document.createElement('div')
  line.className = 'quest-row'
  for (let i = 0; i < row.a; i++) {
    const token = document.createElement('span')
    token.className = 'quest-token a'
    line.append(token)
  }
  for (let i = 0; i < row.b; i++) {
    const token = document.createElement('span')
    token.className = 'quest-token b'
    line.append(token)
  }
  const equals = document.createElement('span')
  equals.className = 'quest-equals'
  equals.textContent = '='
  const total = document.createElement('span')
  total.className = 'quest-total'
  total.textContent = row.total === null ? '?' : String(row.total)
  line.append(equals, total)
  return line
}

function mount(logic: MissionLogic<QuestConfig, number>, onChange: () => void): Board<number> {
  const { rows, valueA, valueB } = logic.config
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap quest-board'

  const table = document.createElement('div')
  table.className = 'quest-table'
  for (const row of rows) table.append(tokenRow(row))
  const found = document.createElement('p')
  found.className = 'quest-found'
  wrap.append(table, found)

  const pad = keypad({ max: 999 }, onChange)
  wrap.append(pad.el)

  return {
    el: wrap,
    answer: () => pad.value(),
    hint(level) {
      if (level === 1) table.firstElementChild?.classList.add('lit')
      if (level === 2) found.textContent = `= ${valueA}`
      if (level === 3) found.textContent = `= ${valueA} , = ${valueB}`
      if (level >= 4) pad.set(logic.solution)
    },
    demonstrate() { pad.set(logic.solution) },
    place: (value) => pad.set(value),
    destroy: () => wrap.remove(),
  }
}

export const quest: MissionModule<QuestConfig, number> = { kind: 'quest', generate, mount }
