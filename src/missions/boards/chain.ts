export interface ChainKey {
  label: string
  onClick: () => void
}

export interface ChainBoard {
  el: HTMLElement
  /** the number the chain has reached */
  setValue: (value: number) => void
  /** the whole chain so far, as written out */
  setChain: (parts: string[]) => void
  goal: (text: string) => void
  keys: (keys: ChainKey[]) => void
  mark: (text: string) => void
  /** colour the running value when it has reached the goal */
  matched: (yes: boolean) => void
  clearHints: () => void
  destroy: () => void
}

/** A board for building a number by steps: a goal, a running value and keys. */
export function chainBoard(): ChainBoard {
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap chain-board'

  const goalEl = document.createElement('p')
  goalEl.className = 'chain-goal'
  const valueEl = document.createElement('p')
  valueEl.className = 'chain-value'
  const chainEl = document.createElement('p')
  chainEl.className = 'chain-steps'
  const hintEl = document.createElement('p')
  hintEl.className = 'chain-hint'
  const trayEl = document.createElement('div')
  trayEl.className = 'tray'
  wrap.append(goalEl, valueEl, chainEl, hintEl, trayEl)

  return {
    el: wrap,
    setValue: (value) => { valueEl.textContent = String(value) },
    setChain: (parts) => { chainEl.textContent = parts.join(' → ') },
    goal: (text) => { goalEl.textContent = text },
    keys: (keys) => {
      trayEl.replaceChildren()
      for (const key of keys) {
        const node = document.createElement('button')
        node.type = 'button'
        node.className = 'btn small tray-key'
        node.textContent = key.label
        node.addEventListener('click', key.onClick)
        trayEl.append(node)
      }
    },
    mark: (text) => { hintEl.textContent = text },
    matched: (yes) => valueEl.classList.toggle('matched', yes),
    clearHints: () => { hintEl.textContent = '' },
    destroy: () => wrap.remove(),
  }
}
