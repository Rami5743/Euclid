import { makeRng } from '../../battle/rng'
import { keypad } from '../boards/keypad'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

const SVG_NS = 'http://www.w3.org/2000/svg'
const COLOURS = ['#b23b2e', '#2f6fb3', '#4f7a3f', '#c98a16']

export interface SpinConfig {
  sectors: number[]
  /** the sector each spin lands on, worked out in advance */
  results: number[]
  watched: number
}

export interface FrequencyConfig {
  counts: number[]
  total: number
  watched: number
}

export interface WheelConfig {
  sectors: number
  wanted: number
  /** the share asked for, written as a fraction */
  label: string
}

function el(tag: string, attrs: Record<string, string>, text?: string): SVGElement {
  const node = document.createElementNS(SVG_NS, tag)
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v)
  if (text !== undefined) node.textContent = text
  return node
}

function wheel(colours: string[], size = 300): { root: SVGSVGElement; turn: (sector: number) => void } {
  const root = document.createElementNS(SVG_NS, 'svg')
  root.setAttribute('class', 'wheel')
  root.setAttribute('viewBox', `0 0 ${size} ${size}`)
  const r = size / 2 - 14
  const cx = size / 2
  const cy = size / 2
  const step = 360 / colours.length
  const dial = el('g', { class: 'wheel-dial' })
  colours.forEach((colour, i) => {
    const from = (i * step * Math.PI) / 180
    const to = ((i + 1) * step * Math.PI) / 180
    const x1 = cx + r * Math.cos(from)
    const y1 = cy + r * Math.sin(from)
    const x2 = cx + r * Math.cos(to)
    const y2 = cy + r * Math.sin(to)
    dial.append(el('path', {
      class: 'wheel-sector',
      fill: colour,
      d: `M${cx} ${cy} L${x1} ${y1} A${r} ${r} 0 ${step > 180 ? 1 : 0} 1 ${x2} ${y2} Z`,
    }))
  })
  root.append(dial)
  root.append(el('circle', { class: 'wheel-hub', cx: String(cx), cy: String(cy), r: '14' }))
  root.append(el('path', { class: 'wheel-pointer', d: `M${cx} 6 l-14 26 h28 Z` }))

  let spins = 0
  const turn = (sector: number): void => {
    spins++
    // land with the wanted sector under the pointer at the top
    const middle = (sector + 0.5) * step
    const angle = 360 * 3 * spins - 90 - middle
    dial.setAttribute('transform', `rotate(${angle} ${cx} ${cy})`)
  }
  return { root: root as SVGSVGElement, turn }
}

export function generateSpin(seed: number): MissionLogic<SpinConfig, number> {
  const rng = makeRng(seed)
  const count = 3 + Math.floor(rng() * 2)
  const sectors = Array.from({ length: count }, (_, i) => i)
  const spins = 10 + Math.floor(rng() * 3)
  const results = Array.from({ length: spins }, () => Math.floor(rng() * count))
  const watched = Math.floor(rng() * count)
  const answer = results.filter((r) => r === watched).length

  return {
    config: { sectors, results, watched },
    solution: answer,
    check: (value) => value === answer,
    hints: [
      { text: 'סובב את הגלגל עד הסוף' },
      { text: 'הספירה נרשמת מתחת' },
      { text: `סופרים רק את הצבע המסומן` },
      { text: `${num(answer)} פעמים מתוך ${num(spins)}` },
    ],
    explain: [
      `הצבע יצא ${num(answer)} פעמים מתוך ${num(spins)} סיבובים.`,
      `זו השכיחות שלו בניסוי הזה.`,
    ],
  }
}

export function generateFrequency(seed: number): MissionLogic<FrequencyConfig, number> {
  const rng = makeRng(seed)
  const totals = [20, 25, 50]
  const total = totals[Math.floor(rng() * totals.length)]!
  const count = 3
  const counts: number[] = []
  let left = total
  for (let i = 0; i < count - 1; i++) {
    const share = Math.max(1, Math.round((left * (0.2 + rng() * 0.4)) / 5) * 5)
    counts.push(Math.min(share, left - (count - 1 - i)))
    left -= counts[i]!
  }
  counts.push(left)
  const watched = Math.floor(rng() * count)
  const percent = Math.round((counts[watched]! / total) * 100)

  return {
    config: { counts, total, watched },
    solution: percent,
    check: (value) => value === percent,
    hints: [
      { text: `${num(counts[watched]!)} מתוך ${num(total)}` },
      { text: `${num(counts[watched]!)} : ${num(total)}` },
      { text: `כופלים ב־${num(100)}` },
      { text: `${num(percent)}%` },
    ],
    explain: [
      `${num(counts[watched]!)} מתוך ${num(total)} הם ${num(`${counts[watched]!}/${total}`)}.`,
      `באחוזים זה ${num(percent)}%.`,
    ],
  }
}

export function generateWheel(seed: number): MissionLogic<WheelConfig, number> {
  const rng = makeRng(seed)
  const options = [
    { sectors: 12, wanted: 3, label: '1/4' },
    { sectors: 12, wanted: 4, label: '1/3' },
    { sectors: 12, wanted: 6, label: '1/2' },
    { sectors: 10, wanted: 2, label: '1/5' },
    { sectors: 8, wanted: 2, label: '1/4' },
    { sectors: 9, wanted: 3, label: '1/3' },
  ]
  const choice = options[Math.floor(rng() * options.length)]!
  return {
    config: choice,
    solution: choice.wanted,
    check: (value) => value === choice.wanted,
    hints: [
      { text: `לגלגל ${num(choice.sectors)} חלקים` },
      { text: `${num(choice.label)} מתוך ${num(choice.sectors)}` },
      { text: `${num(choice.sectors)} : ${num(choice.label.split('/')[1]!)}` },
      { text: `${num(choice.wanted)} חלקים` },
    ],
    explain: [
      `${num(choice.label)} מתוך ${num(choice.sectors)} חלקים הם ${num(choice.wanted)} חלקים.`,
    ],
  }
}

function tallyRow(counts: number[], watched: number): HTMLElement {
  const row = document.createElement('div')
  row.className = 'tally-row'
  counts.forEach((count, i) => {
    const cell = document.createElement('div')
    cell.className = `tally${i === watched ? ' watched' : ''}`
    const swatch = document.createElement('span')
    swatch.className = 'tally-colour'
    swatch.style.background = COLOURS[i % COLOURS.length]!
    const value = document.createElement('span')
    value.className = 'tally-count'
    value.textContent = String(count)
    cell.append(swatch, value)
    row.append(cell)
  })
  return row
}

function mountSpin(logic: MissionLogic<SpinConfig, number>, onChange: () => void): Board<number> {
  const { sectors, results, watched } = logic.config
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap chance-board'
  const colours = sectors.map((_, i) => COLOURS[i % COLOURS.length]!)
  const spinner = wheel(colours)
  wrap.append(spinner.root)

  const counts = sectors.map(() => 0)
  let played = 0
  const tally = document.createElement('div')
  const paint = (): void => {
    tally.replaceChildren(tallyRow(counts, watched))
  }
  paint()

  const button = document.createElement('button')
  button.type = 'button'
  button.className = 'btn small tray-key'
  button.textContent = 'סובב'
  button.addEventListener('click', () => {
    if (played >= results.length) return
    const sector = results[played]!
    counts[sector] = (counts[sector] ?? 0) + 1
    played++
    spinner.turn(sector)
    paint()
    if (played >= results.length) button.setAttribute('disabled', 'true')
  })

  const tray = document.createElement('div')
  tray.className = 'tray'
  tray.append(button)
  wrap.append(tray, tally)

  const pad = keypad({ max: 99 }, onChange)
  wrap.append(pad.el)

  const runAll = (): void => {
    while (played < results.length) button.click()
  }

  return {
    el: wrap,
    answer: () => pad.value(),
    hint(level) {
      if (level <= 3) runAll()
      if (level >= 4) { runAll(); pad.set(logic.solution) }
    },
    demonstrate() { runAll(); pad.set(logic.solution) },
    place: (value) => pad.set(value),
    destroy: () => wrap.remove(),
  }
}

function mountFrequency(logic: MissionLogic<FrequencyConfig, number>, onChange: () => void): Board<number> {
  const { counts, total, watched } = logic.config
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap chance-board'

  const chart = document.createElementNS(SVG_NS, 'svg')
  chart.setAttribute('class', 'bar-chart')
  chart.setAttribute('viewBox', '0 0 600 320')
  const max = Math.max(...counts)
  counts.forEach((count, i) => {
    const h = (count / max) * 220
    const x = 80 + i * 160
    chart.append(el('rect', {
      class: `bar${i === watched ? ' watched' : ''}`,
      x: String(x), y: String(260 - h), width: '96', height: String(h),
      fill: COLOURS[i % COLOURS.length]!,
    }))
    chart.append(el('text', { class: 'bar-label', x: String(x + 48), y: '294', 'text-anchor': 'middle' }, String(count)))
  })
  chart.append(el('line', { class: 'bar-axis', x1: '40', y1: '262', x2: '560', y2: '262' }))
  wrap.append(chart)

  const totalLine = document.createElement('p')
  totalLine.className = 'chain-steps'
  totalLine.textContent = `${total}`
  wrap.append(totalLine)

  const pad = keypad({ max: 100 }, onChange)
  wrap.append(pad.el)

  return {
    el: wrap,
    answer: () => pad.value(),
    hint(level) { if (level >= 4) pad.set(logic.solution) },
    demonstrate() { pad.set(logic.solution) },
    place: (value) => pad.set(value),
    destroy: () => wrap.remove(),
  }
}

function mountWheel(logic: MissionLogic<WheelConfig, number>, onChange: () => void): Board<number> {
  const { sectors, label } = logic.config
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap chance-board'

  const goal = document.createElement('p')
  goal.className = 'chain-goal'
  goal.textContent = label
  wrap.append(goal)

  let red = 0
  let touched = false
  const host = document.createElement('div')
  const paint = (): void => {
    const colours = Array.from({ length: sectors }, (_, i) => (i < red ? COLOURS[0]! : '#d9d2c2'))
    host.replaceChildren(wheel(colours).root)
  }
  paint()
  wrap.append(host)

  const slider = document.createElement('input')
  slider.type = 'range'
  slider.min = '0'
  slider.max = String(sectors)
  slider.value = '0'
  slider.className = 'step-slider'
  const readout = document.createElement('p')
  readout.className = 'step-label'
  readout.textContent = `0 / ${sectors}`
  slider.addEventListener('input', () => {
    red = Number(slider.value)
    touched = true
    readout.textContent = `${red} / ${sectors}`
    paint()
    onChange()
  })
  wrap.append(slider, readout)

  return {
    el: wrap,
    answer: () => (touched ? red : null),
    hint(level) {
      if (level >= 4) {
        red = logic.solution
        slider.value = String(red)
        touched = true
        readout.textContent = `${red} / ${sectors}`
        paint()
        onChange()
      }
    },
    demonstrate() {
      red = logic.solution
      slider.value = String(red)
      touched = true
      readout.textContent = `${red} / ${sectors}`
      paint()
      onChange()
    },
    place: (value) => {
      red = value
      slider.value = String(value)
      touched = true
      readout.textContent = `${red} / ${sectors}`
      paint()
      onChange()
    },
    destroy: () => wrap.remove(),
  }
}

export const spinWheel: MissionModule<SpinConfig, number> = { kind: 'spin', generate: generateSpin, mount: mountSpin }
export const relativeFrequency: MissionModule<FrequencyConfig, number> = {
  kind: 'frequency', generate: generateFrequency, mount: mountFrequency,
}
export const buildWheel: MissionModule<WheelConfig, number> = {
  kind: 'build-wheel', generate: generateWheel, mount: mountWheel,
}
