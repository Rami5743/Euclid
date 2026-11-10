import { makeRng } from '../../battle/rng'
import { columnsBoard, type Assignment } from '../boards/columns'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface AlphameticConfig {
  /** the three rows of the sum, written in letters */
  rows: string[]
  sign: '+' | '×'
  letters: string[]
  /** the values that produced the puzzle */
  values: { a: number; b: number; result: number }
  /** the letters that stand at the head of a row and so cannot be zero */
  leading: string[]
}

const ALPHABET = ['א', 'ב', 'ג', 'ד', 'ה', 'ו']

/** Writes the three numbers in letters, one letter per digit value. */
export function encode(a: number, b: number, result: number): { rows: string[]; letters: string[]; leading: string[] } | null {
  const digits = [...new Set([...String(a), ...String(b), ...String(result)])]
  if (digits.length > ALPHABET.length) return null
  const map = new Map<string, string>()
  digits.forEach((d, i) => map.set(d, ALPHABET[i]!))
  const write = (value: number): string => String(value).split('').map((d) => map.get(d)!).join('')
  const rows = [write(a), write(b), write(result)]
  return {
    rows,
    letters: digits.map((d) => map.get(d)!),
    leading: [...new Set(rows.map((row) => row[0]!))],
  }
}

/** Reads a row back as a number, or null while a letter is still blank. */
export function valueOf(row: string, assignment: Assignment): number | null {
  let value = 0
  for (const letter of row) {
    const digit = assignment[letter]
    if (digit === undefined) return null
    value = value * 10 + digit
  }
  return value
}

export function checkAssignment(config: AlphameticConfig, assignment: Assignment): boolean {
  const digits = config.letters.map((l) => assignment[l])
  if (digits.some((d) => d === undefined)) return false
  if (new Set(digits).size !== digits.length) return false
  if (config.leading.some((l) => assignment[l] === 0)) return false
  const [first, second, result] = config.rows.map((row) => valueOf(row, assignment))
  if (first === null || second === null || result === null) return false
  return config.sign === '+' ? first + second === result : first * second === result
}

function build(seed: number, sign: '+' | '×'): MissionLogic<AlphameticConfig, Assignment> {
  const rng = makeRng(seed)
  let a = 0
  let b = 0
  let result = 0
  let coded: ReturnType<typeof encode> = null

  for (let attempt = 0; attempt < 400; attempt++) {
    if (sign === '+') {
      a = 11 + Math.floor(rng() * 78)
      b = 11 + Math.floor(rng() * 78)
      result = a + b
    } else {
      a = 12 + Math.floor(rng() * 38)
      b = 3 + Math.floor(rng() * 7)
      result = a * b
    }
    if (String(result).includes('0') || String(a).includes('0') || String(b).includes('0')) continue
    coded = encode(a, b, result)
    if (coded && coded.letters.length >= 3) break
    coded = null
  }
  if (!coded) {
    a = 12
    b = 34
    result = 46
    coded = encode(a, b, result)!
  }

  const config: AlphameticConfig = {
    rows: coded.rows,
    sign,
    letters: coded.letters,
    values: { a, b, result },
    leading: coded.leading,
  }

  // One assignment that works: the one the puzzle was written from.
  const solution: Assignment = {}
  const digitsOf = (text: string, value: number): void => {
    text.split('').forEach((letter, i) => { solution[letter] = Number(String(value)[i]) })
  }
  digitsOf(coded.rows[0]!, a)
  digitsOf(coded.rows[1]!, b)
  digitsOf(coded.rows[2]!, result)

  const unitsLetter = coded.rows[2]![coded.rows[2]!.length - 1]!
  const firstLetter = coded.letters[0]!

  return {
    config,
    solution,
    check: (assignment) => checkAssignment(config, assignment),
    hints: [
      { text: 'מתחילים מטור היחידות' },
      { text: `${firstLetter} = ${num(solution[firstLetter]!)}` },
      { text: `${unitsLetter} = ${num(solution[unitsLetter]!)}` },
      { text: 'כל האותיות' },
    ],
    explain: [
      sign === '+'
        ? `${num(a)} + ${num(b)} = ${num(result)}.`
        : `${num(a)} × ${num(b)} = ${num(result)}.`,
      `כל אות היא ספרה אחת, ולשתי אותיות שונות ספרות שונות.`,
    ],
  }
}

export function generateSum(seed: number): MissionLogic<AlphameticConfig, Assignment> {
  return build(seed, '+')
}

export function generateProduct(seed: number): MissionLogic<AlphameticConfig, Assignment> {
  return build(seed, '×')
}

function mount(logic: MissionLogic<AlphameticConfig, Assignment>, onChange: () => void): Board<Assignment> {
  const { rows, sign, letters } = logic.config
  const solution = logic.solution
  let touched = false

  const board = columnsBoard({ rows, sign, letters }, () => {
    touched = true
    paintLive()
    onChange()
  })

  function paintLive(): void {
    const assignment = board.assignment()
    const shown = rows.map((row) => row.split('').map((l) => assignment[l] ?? '?').join(''))
    board.live(`${shown[0]} ${sign} ${shown[1]} = ${shown[2]}`)
  }
  paintLive()

  return {
    el: board.el,
    answer: () => (touched ? board.assignment() : null),
    hint(level) {
      if (level === 1) board.mark(`${rows[0]!.slice(-1)} ${sign} ${rows[1]!.slice(-1)} → ${rows[2]!.slice(-1)}`)
      if (level === 2) board.reveal(letters[0]!, solution[letters[0]!]!)
      if (level === 3) {
        const second = letters.find((l) => board.assignment()[l] === undefined) ?? letters[1]!
        board.reveal(second, solution[second]!)
      }
      if (level >= 4) for (const letter of letters) board.reveal(letter, solution[letter]!)
    },
    demonstrate() {
      for (const letter of letters) board.reveal(letter, solution[letter]!)
    },
    place: (assignment) => {
      board.clear()
      for (const [letter, digit] of Object.entries(assignment)) board.set(letter, digit)
    },
    destroy: () => board.destroy(),
  }
}

export const alphameticSum: MissionModule<AlphameticConfig, Assignment> = {
  kind: 'alphametic-sum',
  generate: generateSum,
  mount,
}

export const alphameticProduct: MissionModule<AlphameticConfig, Assignment> = {
  kind: 'alphametic-product',
  generate: generateProduct,
  mount,
}
