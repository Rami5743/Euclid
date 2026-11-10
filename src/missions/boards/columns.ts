export interface ColumnsOptions {
  /** the rows of the sum, as strings of letters, right aligned */
  rows: string[]
  /** the sign written to the left of the last addend */
  sign: '+' | '×'
  letters: string[]
}

export type Assignment = Record<string, number>

export interface ColumnsBoard {
  el: HTMLElement
  assignment: () => Assignment
  set: (letter: string, digit: number) => void
  clear: () => void
  /** the line under the sum, written out with the digits chosen so far */
  live: (text: string) => void
  /** mark a letter as given away by a hint */
  reveal: (letter: string, digit: number) => void
  mark: (text: string) => void
  destroy: () => void
}

export function columnsBoard(options: ColumnsOptions, onChange: () => void): ColumnsBoard {
  const { rows, sign, letters } = options
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap columns-board'

  const sum = document.createElement('div')
  sum.className = 'columns'
  const width = Math.max(...rows.map((r) => r.length))
  rows.forEach((row, index) => {
    const line = document.createElement('div')
    line.className = 'col-row'
    const padded = row.padStart(width, ' ')
    const signCell = document.createElement('span')
    signCell.className = 'col-cell sign'
    signCell.textContent = index === rows.length - 2 ? sign : ''
    line.append(signCell)
    for (const ch of padded) {
      const cell = document.createElement('span')
      cell.className = ch === ' ' ? 'col-cell blank' : 'col-cell letter'
      cell.dataset.letter = ch.trim()
      cell.textContent = ch.trim()
      line.append(cell)
    }
    if (index === rows.length - 2) line.classList.add('last-addend')
    sum.append(line)
  })
  const rule = document.createElement('div')
  rule.className = 'col-rule'
  sum.insertBefore(rule, sum.lastElementChild)

  const liveEl = document.createElement('p')
  liveEl.className = 'columns-live'
  const markEl = document.createElement('p')
  markEl.className = 'chain-hint'

  const chips = document.createElement('div')
  chips.className = 'letters'
  const keypad = document.createElement('div')
  keypad.className = 'keypad'

  wrap.append(sum, liveEl, markEl, chips, keypad)

  const assignment: Assignment = {}
  let selected = letters[0] ?? ''

  const paint = (): void => {
    chips.replaceChildren()
    for (const letter of letters) {
      const chip = document.createElement('button')
      chip.type = 'button'
      chip.className = `chip letter-chip${letter === selected ? ' selected' : ''}`
      const digit = assignment[letter]
      const taken = Object.entries(assignment)
        .some(([other, value]) => other !== letter && value === digit && digit !== undefined)
      if (taken) chip.classList.add('clash')
      chip.innerHTML = `<span class="chip-letter">${letter}</span><span class="chip-digit">${digit ?? '?'}</span>`
      chip.addEventListener('click', () => { selected = letter; paint() })
      chips.append(chip)
    }
    for (const cell of Array.from(sum.querySelectorAll<HTMLElement>('.col-cell.letter'))) {
      const letter = cell.dataset.letter ?? ''
      const digit = assignment[letter]
      cell.textContent = digit === undefined ? letter : String(digit)
      cell.classList.toggle('filled', digit !== undefined)
    }
  }

  for (let d = 0; d <= 9; d++) {
    const key = document.createElement('button')
    key.type = 'button'
    key.className = 'btn small tray-key digit-key'
    key.textContent = String(d)
    key.addEventListener('click', () => {
      if (!selected) return
      assignment[selected] = d
      paint()
      onChange()
    })
    keypad.append(key)
  }
  const erase = document.createElement('button')
  erase.type = 'button'
  erase.className = 'btn small tray-key'
  erase.textContent = 'נקה'
  erase.addEventListener('click', () => {
    for (const letter of letters) delete assignment[letter]
    paint()
    onChange()
  })
  keypad.append(erase)

  paint()

  return {
    el: wrap,
    assignment: () => ({ ...assignment }),
    set(letter, digit) { assignment[letter] = digit; paint(); onChange() },
    clear() { for (const letter of letters) delete assignment[letter]; paint(); onChange() },
    live: (text) => { liveEl.textContent = text },
    reveal(letter, digit) { assignment[letter] = digit; paint(); onChange() },
    mark: (text) => { markEl.textContent = text },
    destroy: () => wrap.remove(),
  }
}
