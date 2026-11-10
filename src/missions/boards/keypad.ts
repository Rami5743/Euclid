export interface Keypad {
  el: HTMLElement
  value: () => number | null
  set: (value: number) => void
  clear: () => void
}

export interface KeypadOptions {
  /** allow a minus sign */
  signed?: boolean
  max?: number
}

/** A number pad: the answer is typed, and shown large above the keys. */
export function keypad(options: KeypadOptions, onChange: () => void): Keypad {
  const { signed = false, max = 999 } = options
  const wrap = document.createElement('div')
  wrap.className = 'keypad-board'

  const readout = document.createElement('p')
  readout.className = 'keypad-readout'
  const keys = document.createElement('div')
  keys.className = 'keypad'
  wrap.append(readout, keys)

  let text = ''

  const paint = (): void => { readout.textContent = text === '' ? '?' : text }
  paint()

  const push = (ch: string): void => {
    if (ch === '-') {
      text = text.startsWith('-') ? text.slice(1) : `-${text}`
    } else if (text.replace('-', '').length < String(max).length) {
      text += ch
    }
    paint()
    onChange()
  }

  for (let d = 0; d <= 9; d++) {
    const key = document.createElement('button')
    key.type = 'button'
    key.className = 'btn small tray-key digit-key'
    key.textContent = String(d)
    key.addEventListener('click', () => push(String(d)))
    keys.append(key)
  }
  if (signed) {
    const minus = document.createElement('button')
    minus.type = 'button'
    minus.className = 'btn small tray-key digit-key'
    minus.textContent = '−'
    minus.addEventListener('click', () => push('-'))
    keys.append(minus)
  }
  const erase = document.createElement('button')
  erase.type = 'button'
  erase.className = 'btn small tray-key'
  erase.textContent = 'נקה'
  erase.addEventListener('click', () => { text = ''; paint(); onChange() })
  keys.append(erase)

  return {
    el: wrap,
    value: () => {
      if (text === '' || text === '-') return null
      return Number(text)
    },
    set(value) { text = String(value); paint(); onChange() },
    clear() { text = ''; paint(); onChange() },
  }
}
