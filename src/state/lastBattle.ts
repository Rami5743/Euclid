import type { HeroClass } from '../content/heroes'

export interface HeroOutcome {
  cls: HeroClass
  name: string
  alive: boolean
  /** share of hit points left, between 0 and 1 */
  health: number
}

export interface BattleOutcome {
  fortressId: string
  won: boolean
  seconds: number
  heroes: HeroOutcome[]
}

/**
 * The outcome of the battle just fought, handed from the battle screen to the
 * result screen. It deliberately lives in memory only: after a reload there is
 * no battle to report on, and the result screen falls back to the short form.
 */
let last: BattleOutcome | null = null

export function setLastBattle(outcome: BattleOutcome): void {
  last = outcome
}

export function lastBattle(fortressId: string): BattleOutcome | null {
  return last && last.fortressId === fortressId ? last : null
}
