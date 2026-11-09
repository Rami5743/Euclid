import { BASE_STATS, HERO_NAMES, UPGRADABLE, type HeroClass, type Stat } from '../content/heroes'
import { multiplier } from '../content/upgrades'
import { fortressById } from '../content/world'
import type { Profile } from '../state/profile'
import type { BattleConfig, UnitSpec } from './sim'
import type { UnitStats } from './types'

const ORDER: HeroClass[] = ['warrior', 'archer', 'mage']

const ENEMY_NAMES: Record<HeroClass, string> = {
  warrior: 'שומר המבצר',
  archer: 'קשת המגדל',
  mage: 'מכשף החומה',
}

/** Only these parameters are scaled by the difficulty of a fortress. */
const SCALED: Stat[] = ['hp', 'attack', 'defense']

export function statsWithUpgrades(cls: HeroClass, levels: Partial<Record<Stat, number>>): UnitStats {
  const base = BASE_STATS[cls]
  const out: UnitStats = { ...base }
  for (const stat of UPGRADABLE[cls]) {
    const level = levels[stat] ?? 0
    if (level <= 0) continue
    const current = out[stat]
    if (typeof current === 'number') out[stat] = current * multiplier(level)
  }
  return out
}

export function playerSpecs(profile: Profile): UnitSpec[] {
  return ORDER.map((cls) => {
    const hero = profile.heroes[cls]
    return {
      cls,
      name: hero.name || HERO_NAMES[cls],
      gender: hero.gender,
      stats: statsWithUpgrades(cls, hero.levels),
    }
  })
}

export function enemySpecs(difficulty: number): UnitSpec[] {
  return ORDER.map((cls) => {
    const stats: UnitStats = { ...BASE_STATS[cls] }
    for (const stat of SCALED) {
      const current = stats[stat]
      if (typeof current === 'number') stats[stat] = current * difficulty
    }
    return { cls, name: ENEMY_NAMES[cls], gender: 'm' as const, stats }
  })
}

export function battleConfigFor(fortressId: string, profile: Profile, seed: number): BattleConfig | null {
  const hit = fortressById(fortressId)
  if (!hit || hit.fortress.home) return null
  return {
    player: playerSpecs(profile),
    enemy: enemySpecs(hit.fortress.difficulty),
    seed,
    // On screen the player's side is commanded by hand: it holds its ground
    // and heals only when told to.
    manual: 'player',
  }
}
