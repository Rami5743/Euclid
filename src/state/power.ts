import { UPGRADABLE, type HeroClass } from '../content/heroes'
import { cumulativeCost } from '../content/upgrades'
import type { Fortress } from '../content/world'
import type { Profile } from './profile'

/** Stars the player has already put into upgrades. */
export function investedStars(profile: Profile): number {
  let total = 0
  for (const cls of Object.keys(profile.heroes) as HeroClass[]) {
    const hero = profile.heroes[cls]
    for (const stat of UPGRADABLE[cls]) total += cumulativeCost(hero.levels[stat] ?? 0)
  }
  return total
}

export type Challenge = 'easy' | 'fair' | 'hard' | 'hopeless'

const LABELS: Record<Challenge, string> = {
  easy: 'קל',
  fair: 'מאתגר',
  hard: 'קשה',
  hopeless: 'חזק מדי כרגע',
}

/**
 * How a fortress compares to the player's current strength. The star figure of
 * each fortress comes from the measurements in tools/balance.ts.
 */
export function challengeOf(fortress: Fortress, profile: Profile): Challenge {
  if (fortress.starsNeeded === 0) return 'easy'
  const ratio = investedStars(profile) / fortress.starsNeeded
  if (ratio >= 2) return 'easy'
  if (ratio >= 1) return 'fair'
  if (ratio >= 0.6) return 'hard'
  return 'hopeless'
}

export function challengeLabel(fortress: Fortress, profile: Profile): string {
  return LABELS[challengeOf(fortress, profile)]
}
