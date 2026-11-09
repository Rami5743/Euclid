import { UPGRADABLE, type HeroClass } from '../content/heroes'
import { cumulativeCost } from '../content/upgrades'
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
