import { makeRng } from '../../battle/rng'
import { keypad } from '../boards/keypad'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface NetConfig {
  a: number
  b: number
  c: number
}

export function surface(config: NetConfig): number {
  const { a, b, c } = config
  return 2 * (a * b + a * c + b * c)
}

export function generate(seed: number): MissionLogic<NetConfig, number> {
  const rng = makeRng(seed)
  const a = 2 + Math.floor(rng() * 5)
  const b = 2 + Math.floor(rng() * 5)
  const c = 2 + Math.floor(rng() * 5)
  const config = { a, b, c }
  const total = surface(config)

  return {
    config,
    solution: total,
    check: (value) => value === total,
    hints: [
      { text: 'לפריסה שש פאות' },
      { text: `${num(a)} × ${num(b)} = ${num(a * b)}` },
      { text: `${num(a * b)} + ${num(a * c)} + ${num(b * c)} = ${num(a * b + a * c + b * c)}` },
      { text: `כל פאה מופיעה פעמיים: ${num(total)}` },
    ],
    explain: [
      `לתיבה שלושה זוגות של פאות: ${num(a * b)} , ${num(a * c)} , ${num(b * c)}.`,
      `${num(2)} × (${num(a * b)} + ${num(a * c)} + ${num(b * c)}) = ${num(total)}.`,
    ],
  }
}

const SVG_NS = 'http://www.w3.org/2000/svg'

function rect(x: number, y: number, w: number, h: number, label: string): SVGGElement {
  const g = document.createElementNS(SVG_NS, 'g')
  const node = document.createElementNS(SVG_NS, 'rect')
  node.setAttribute('class', 'net-face')
  node.setAttribute('x', String(x))
  node.setAttribute('y', String(y))
  node.setAttribute('width', String(w))
  node.setAttribute('height', String(h))
  const text = document.createElementNS(SVG_NS, 'text')
  text.setAttribute('class', 'net-label')
  text.setAttribute('x', String(x + w / 2))
  text.setAttribute('y', String(y + h / 2 + 9))
  text.setAttribute('text-anchor', 'middle')
  text.textContent = label
  g.append(node, text)
  return g
}

function mount(logic: MissionLogic<NetConfig, number>, onChange: () => void): Board<number> {
  const { a, b, c } = logic.config
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap net-board'

  const unit = Math.min(44, 420 / (2 * a + 2 * b))
  const W = unit * (2 * a + 2 * b)
  const H = unit * (2 * c + b)
  const root = document.createElementNS(SVG_NS, 'svg')
  root.setAttribute('class', 'board net-art')
  root.setAttribute('viewBox', `-20 -20 ${W + 40} ${H + 40}`)

  const top = unit * c
  // the four sides in a row, with the lid above and the base below
  root.append(rect(0, top, unit * a, unit * c, `${a}×${c}`))
  root.append(rect(unit * a, top, unit * b, unit * c, `${b}×${c}`))
  root.append(rect(unit * (a + b), top, unit * a, unit * c, `${a}×${c}`))
  root.append(rect(unit * (2 * a + b), top, unit * b, unit * c, `${b}×${c}`))
  root.append(rect(unit * a, 0, unit * b, unit * c > unit * b ? unit * b : unit * b, `${a}×${b}`))
  root.append(rect(unit * a, top + unit * c, unit * b, unit * b, `${a}×${b}`))
  wrap.append(root)

  const pad = keypad({ max: 999 }, onChange)
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

export const boxNet: MissionModule<NetConfig, number> = { kind: 'net', generate, mount }
