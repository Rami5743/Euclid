import { makeRng } from '../../battle/rng'
import { keypad } from '../boards/keypad'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface BalanceConfig {
  /** left pan: leftX boxes and leftN weights; right pan likewise */
  leftX: number
  leftN: number
  rightX: number
  rightN: number
}

export function solve(config: BalanceConfig): number {
  const { leftX, leftN, rightX, rightN } = config
  return (rightN - leftN) / (leftX - rightX)
}

function build(seed: number, bothSides: boolean): MissionLogic<BalanceConfig, number> {
  const rng = makeRng(seed)
  const x = 2 + Math.floor(rng() * 6)
  const leftX = 2 + Math.floor(rng() * 2)
  const rightX = bothSides ? 1 + Math.floor(rng() * (leftX - 1)) : 0
  const leftN = Math.floor(rng() * 6)
  const rightN = leftN + (leftX - rightX) * x
  const config = { leftX, leftN, rightX, rightN }

  const left = `${leftX}x${leftN > 0 ? ` + ${leftN}` : ''}`
  const right = `${rightX > 0 ? `${rightX}x + ` : ''}${rightN}`
  return {
    config,
    solution: x,
    check: (answer) => answer === x,
    hints: [
      { text: 'מורידים אותו דבר משני הצדדים' },
      bothSides
        ? { text: `מורידים ${num(`${rightX}x`)} משני הצדדים` }
        : { text: leftN > 0 ? `מורידים ${num(leftN)} משני הצדדים` : 'שתי הכפות שוות' },
      { text: `נשאר ${num(`${leftX - rightX}x`)} = ${num(rightN - leftN)}` },
      { text: `${num('x')} = ${num(x)}` },
    ],
    explain: [
      `${num(left)} = ${num(right)}.`,
      `${num(`${leftX - rightX}x`)} = ${num(rightN - leftN)}.`,
      `${num('x')} = ${num(x)}.`,
    ],
  }
}

export function generateSimple(seed: number): MissionLogic<BalanceConfig, number> {
  return build(seed, false)
}

export function generateBothSides(seed: number): MissionLogic<BalanceConfig, number> {
  return build(seed, true)
}

const SVG_NS = 'http://www.w3.org/2000/svg'

function pan(x: number, boxes: number, weights: number): SVGGElement {
  const g = document.createElementNS(SVG_NS, 'g')
  g.setAttribute('transform', `translate(${x} 0)`)
  g.innerHTML = `
    <path class="rope" d="M-100 70 L-100 172 M100 70 L100 172"/>
    <path class="pan" d="M-120 172 h240 l-26 44 h-188 Z"/>`

  // Many of the same thing are drawn once with a count, so a pan never fills up.
  const row = document.createElementNS(SVG_NS, 'g')
  // Either every item is drawn, or one of them is drawn with a count.
  const boxShown = boxes > 3 ? 1 : boxes
  const weightShown = weights > 4 ? 1 : weights
  const total = boxShown + weightShown
  const width = 52
  let cursor = -((total - 1) * width) / 2

  for (let i = 0; i < boxShown; i++) {
    const box = document.createElementNS(SVG_NS, 'g')
    box.setAttribute('transform', `translate(${cursor} 170)`)
    box.innerHTML = `<rect class="x-box" x="-21" y="-44" width="42" height="42" rx="7"/>
      <text class="x-text" x="0" y="-13" text-anchor="middle">x</text>`
    row.append(box)
    cursor += width
  }
  if (boxes > boxShown) {
    const more = document.createElementNS(SVG_NS, 'text')
    more.setAttribute('class', 'pan-count')
    more.setAttribute('x', String(cursor - width + 36))
    more.setAttribute('y', '147')
    more.textContent = `×${boxes}`
    row.append(more)
    cursor += 34
  }
  for (let i = 0; i < weightShown; i++) {
    const weight = document.createElementNS(SVG_NS, 'circle')
    weight.setAttribute('class', 'weight')
    weight.setAttribute('cx', String(cursor))
    weight.setAttribute('cy', '150')
    weight.setAttribute('r', '18')
    row.append(weight)
    cursor += width
  }
  if (weights > weightShown) {
    const more = document.createElementNS(SVG_NS, 'text')
    more.setAttribute('class', 'pan-count')
    more.setAttribute('x', String(cursor - width + 34))
    more.setAttribute('y', '160')
    more.textContent = `×${weights}`
    row.append(more)
  }
  g.append(row)
  return g
}

function mount(logic: MissionLogic<BalanceConfig, number>, onChange: () => void): Board<number> {
  const { leftX, leftN, rightX, rightN } = logic.config
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap balance-board'

  const root = document.createElementNS(SVG_NS, 'svg')
  root.setAttribute('class', 'board balance-art')
  root.setAttribute('viewBox', '0 0 1000 400')
  root.innerHTML = `
    <path class="stand" d="M500 70 v220 M420 330 h160 l-30 -40 h-100 Z"/>
    <path class="beam" d="M240 70 h520"/>`
  root.append(pan(250, leftX, leftN), pan(750, rightX, rightN))
  wrap.append(root)

  const pad = keypad({ max: 99 }, onChange)
  wrap.append(pad.el)

  return {
    el: wrap,
    answer: () => pad.value(),
    hint(level) {
      if (level >= 4) pad.set(logic.solution)
    },
    demonstrate() { pad.set(logic.solution) },
    place: (value) => pad.set(value),
    destroy: () => wrap.remove(),
  }
}

export const balanceSimple: MissionModule<BalanceConfig, number> = { kind: 'balance', generate: generateSimple, mount }
export const balanceBothSides: MissionModule<BalanceConfig, number> = { kind: 'balance-both', generate: generateBothSides, mount }
