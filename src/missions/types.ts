import type { ContinentId } from '../content/world'

export type MissionKind =
  | 'treasure-line'
  | 'jumps'
  | 'voyage'
  | 'quadrant'
  | 'mirror'
  | 'product'
  | 'perfect-square'
  | 'powers'
  | 'alphametic-sum'
  | 'alphametic-product'
  | 'angle-aim'
  | 'angle-straight'
  | 'angle-triangle'
  | 'angle-isosceles'

export interface MissionSpec {
  id: string
  continent: ContinentId
  topicId: string
  /** two or three words, shown on the card */
  title: string
  kind: MissionKind
  /** missions that have to be solved before this one opens */
  requires: string[]
}

/** One step of the hint ladder: a short line, and what the board shows for it. */
export interface Hint {
  text: string
}

export interface MissionLogic<Config = unknown, Answer = unknown> {
  config: Config
  solution: Answer
  check: (answer: Answer) => boolean
  hints: Hint[]
  /** shown after a correct answer, one short line each */
  explain: string[]
}

/** The live board of a mission. */
export interface Board<Answer = unknown> {
  el: HTMLElement
  /** what the player has put on the board, or null when nothing is set */
  answer: () => Answer | null
  /** reveal the hint of this level, 1 for the first */
  hint: (level: number) => void
  /** put the right answer on the board */
  demonstrate: () => void
  /** put a given answer on the board; used by the automated tests */
  place?: (answer: Answer) => void
  destroy: () => void
}

export interface MissionModule<Config = unknown, Answer = unknown> {
  kind: MissionKind
  generate: (seed: number) => MissionLogic<Config, Answer>
  mount: (logic: MissionLogic<Config, Answer>, onChange: () => void) => Board<Answer>
}
