import { makeRng } from '../../battle/rng'
import { keypad } from '../boards/keypad'
import { numberLine } from '../boards/numberLine'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface ChaseConfig {
  start1: number
  speed1: number
  start2: number
  speed2: number
  meet: number
  from: number
  to: number
}

export function generate(seed: number): MissionLogic<ChaseConfig, number> {
  const rng = makeRng(seed)
  const speed2 = 1 + Math.floor(rng() * 3)
  const speed1 = speed2 + 1 + Math.floor(rng() * 3)
  const meet = 2 + Math.floor(rng() * 5)
  const start1 = 0
  const start2 = start1 + (speed1 - speed2) * meet
  const end = start1 + speed1 * meet
  const to = Math.ceil((end + 4) / 5) * 5

  return {
    config: { start1, speed1, start2, speed2, meet, from: 0, to },
    solution: meet,
    check: (value) => value === meet,
    hints: [
      { text: `ההפרש ביניהם הוא ${num(start2 - start1)}` },
      { text: `בכל צעד הוא נסגר ב־${num(speed1 - speed2)}` },
      { text: `${num(start2 - start1)} : ${num(speed1 - speed2)}` },
      { text: `אחרי ${num(meet)} צעדים` },
    ],
    explain: [
      `ההפרש ההתחלתי הוא ${num(start2 - start1)}.`,
      `בכל צעד הוא נסגר ב־${num(speed1 - speed2)}.`,
      `${num(start2 - start1)} : ${num(speed1 - speed2)} = ${num(meet)}.`,
    ],
  }
}

function mount(logic: MissionLogic<ChaseConfig, number>, onChange: () => void): Board<number> {
  const { start1, speed1, start2, speed2, from, to, meet } = logic.config
  const wrap = document.createElement('div')
  wrap.className = 'board-wrap chase-board'

  const line = numberLine({ from, to, tickStep: 1, labelEvery: 5 })
  const frog = line.token(start1, 'frog')
  const ship = line.token(start2, 'ship')
  wrap.append(line.el)

  const slider = document.createElement('input')
  slider.type = 'range'
  slider.min = '0'
  slider.max = String(meet + 3)
  slider.value = '0'
  slider.className = 'step-slider'
  const stepLabel = document.createElement('p')
  stepLabel.className = 'step-label'

  const show = (t: number): void => {
    frog.set(Math.min(to, start1 + speed1 * t))
    ship.set(Math.min(to, start2 + speed2 * t))
    stepLabel.textContent = `${t}`
  }
  show(0)
  slider.addEventListener('input', () => show(Number(slider.value)))
  wrap.append(slider, stepLabel)

  const pad = keypad({ max: 99 }, onChange)
  wrap.append(pad.el)

  return {
    el: wrap,
    answer: () => pad.value(),
    hint(level) {
      if (level === 1) line.band(start1, start2)
      if (level === 2) { slider.value = '1'; show(1) }
      if (level === 3) { slider.value = '2'; show(2) }
      if (level >= 4) { slider.value = String(meet); show(meet); pad.set(meet) }
    },
    demonstrate() { slider.value = String(meet); show(meet); pad.set(meet) },
    place: (value) => pad.set(value),
    destroy() { line.destroy(); wrap.remove() },
  }
}

export const chase: MissionModule<ChaseConfig, number> = { kind: 'chase', generate, mount }
