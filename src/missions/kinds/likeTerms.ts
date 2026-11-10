import { makeRng } from '../../battle/rng'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface Tile {
  id: string
  /** the coefficient of x, or zero for a plain number */
  x: number
  n: number
}

export interface LikeTermsConfig {
  tiles: Tile[]
  sumX: number
  sumN: number
}

/** Which bin each tile belongs in. */
export type Sorting = Record<string, 'x' | 'n'>

export function generate(seed: number): MissionLogic<LikeTermsConfig, Sorting> {
  const rng = makeRng(seed)
  const tiles: Tile[] = []
  const xCount = 2 + Math.floor(rng() * 2)
  const nCount = 2 + Math.floor(rng() * 2)
  for (let i = 0; i < xCount; i++) {
    const value = 1 + Math.floor(rng() * 6)
    tiles.push({ id: `x${i}`, x: rng() < 0.3 ? -value : value, n: 0 })
  }
  for (let i = 0; i < nCount; i++) {
    const value = 1 + Math.floor(rng() * 9)
    tiles.push({ id: `n${i}`, x: 0, n: rng() < 0.3 ? -value : value })
  }
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    const t = tiles[i]!
    tiles[i] = tiles[j]!
    tiles[j] = t
  }

  const sumX = tiles.reduce((a, t) => a + t.x, 0)
  const sumN = tiles.reduce((a, t) => a + t.n, 0)
  const solution: Sorting = {}
  for (const tile of tiles) solution[tile.id] = tile.x !== 0 ? 'x' : 'n'

  return {
    config: { tiles, sumX, sumN },
    solution,
    check: (answer) => tiles.every((t) => answer[t.id] === (t.x !== 0 ? 'x' : 'n')),
    hints: [
      { text: 'אותו סוג הולך יחד' },
      { text: `הקופסה עם ${num('x')} מקבלת את האיברים עם ${num('x')}` },
      { text: `הקופסה השנייה מקבלת את המספרים` },
      { text: `${num(`${sumX}x`)} ו־${num(sumN)}` },
    ],
    explain: [
      `האיברים עם ${num('x')} מצטרפים ל־${num(`${sumX}x`)}.`,
      `המספרים מצטרפים ל־${num(sumN)}.`,
      `הביטוי כולו הוא ${num(`${sumX}x ${sumN >= 0 ? '+' : '−'} ${Math.abs(sumN)}`)}.`,
    ],
  }
}

export function writeTile(tile: Tile): string {
  if (tile.x !== 0) return tile.x === 1 ? 'x' : tile.x === -1 ? '−x' : `${tile.x < 0 ? '−' : ''}${Math.abs(tile.x)}x`
  return tile.n < 0 ? `−${Math.abs(tile.n)}` : String(tile.n)
}

function mount(logic: MissionLogic<LikeTermsConfig, Sorting>, onChange: () => void): Board<Sorting> {
  const { tiles } = logic.config
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap terms-board'

  const pool = document.createElement('div')
  pool.className = 'tile-pool'
  const bins = document.createElement('div')
  bins.className = 'bins'
  const binX = document.createElement('div')
  binX.className = 'bin'
  const binN = document.createElement('div')
  binN.className = 'bin'
  bins.append(binX, binN)
  wrap.append(pool, bins)

  const sorting: Sorting = {}
  let touched = false

  const totals = { x: document.createElement('p'), n: document.createElement('p') }
  totals.x.className = 'bin-total'
  totals.n.className = 'bin-total'

  const paint = (): void => {
    pool.replaceChildren()
    binX.replaceChildren(headline('x'), totals.x)
    binN.replaceChildren(headline('1'), totals.n)
    let runningX = 0
    let runningN = 0
    for (const tile of tiles) {
      const node = document.createElement('button')
      node.type = 'button'
      node.className = 'term-tile'
      node.textContent = writeTile(tile)
      const bin = sorting[tile.id]
      node.addEventListener('click', () => {
        sorting[tile.id] = bin === 'x' ? 'n' : bin === 'n' ? undefined as unknown as 'x' : 'x'
        if (sorting[tile.id] === undefined) delete sorting[tile.id]
        touched = true
        paint()
        onChange()
      })
      if (bin === 'x') { binX.append(node); runningX += tile.x }
      else if (bin === 'n') { binN.append(node); runningN += tile.n }
      else pool.append(node)
    }
    totals.x.textContent = `${runningX}x`
    totals.n.textContent = String(runningN)
  }

  function headline(text: string): HTMLElement {
    const el = document.createElement('p')
    el.className = 'bin-head'
    el.textContent = text
    return el
  }

  paint()

  return {
    el: wrap,
    answer: () => (touched ? { ...sorting } : null),
    hint(level) {
      const order = tiles.filter((t) => t.x !== 0)
      if (level === 1 && order[0]) { sorting[order[0].id] = 'x'; touched = true }
      if (level === 2) for (const t of order) sorting[t.id] = 'x'
      if (level === 3) for (const t of tiles.filter((t) => t.x === 0).slice(0, 1)) sorting[t.id] = 'n'
      if (level >= 4) for (const t of tiles) sorting[t.id] = t.x !== 0 ? 'x' : 'n'
      touched = true
      paint()
      onChange()
    },
    demonstrate() {
      for (const t of tiles) sorting[t.id] = t.x !== 0 ? 'x' : 'n'
      touched = true
      paint()
      onChange()
    },
    place: (answer) => {
      for (const key of Object.keys(sorting)) delete sorting[key]
      Object.assign(sorting, answer)
      touched = true
      paint()
      onChange()
    },
    destroy: () => wrap.remove(),
  }
}

export const likeTerms: MissionModule<LikeTermsConfig, Sorting> = { kind: 'like-terms', generate, mount }
