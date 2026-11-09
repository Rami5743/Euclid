export type HeroClass = 'warrior' | 'archer' | 'mage'
export type Stat = 'hp' | 'attack' | 'defense' | 'speed' | 'range' | 'healing'

export interface BaseStats {
  hp: number
  attack: number
  defense: number
  /** tiles per second */
  speed: number
  /** tiles */
  range: number
  /** attacks per second */
  attackRate: number
  /** mage only: hit points restored per cast */
  healing?: number
  /** mage only: seconds between casts */
  healRate?: number
}

export type Gender = 'm' | 'f'

/** What each hero is called, in both forms. */
export const HERO_TITLES: Record<HeroClass, Record<Gender, string>> = {
  warrior: { m: 'לוחם', f: 'לוחמת' },
  archer: { m: 'קשת', f: 'קשתית' },
  mage: { m: 'מכשף', f: 'מכשפה' },
}

export function heroTitle(cls: HeroClass, gender: Gender): string {
  return HERO_TITLES[cls][gender]
}

/** Default form, for places where no particular hero is meant. */
export const HERO_NAMES: Record<HeroClass, string> = {
  warrior: HERO_TITLES.warrior.m,
  archer: HERO_TITLES.archer.m,
  mage: HERO_TITLES.mage.m,
}

/** Starting values; the real numbers are fixed in the balance pass (M6). */
export const BASE_STATS: Record<HeroClass, BaseStats> = {
  warrior: { hp: 300, attack: 25, defense: 20, speed: 2.2, range: 1.2, attackRate: 1.0 },
  archer: { hp: 180, attack: 18, defense: 8, speed: 2.4, range: 7.0, attackRate: 0.9 },
  mage: {
    hp: 150, attack: 14, defense: 5, speed: 2.0, range: 4.5, attackRate: 0.8,
    healing: 20, healRate: 3.0,
  },
}

export const STAT_NAMES: Record<Stat, string> = {
  hp: 'חיים',
  attack: 'התקפה',
  defense: 'הגנה',
  speed: 'מהירות',
  range: 'טווח',
  healing: 'ריפוי',
}

/** Which parameters each class may upgrade with stars. */
export const UPGRADABLE: Record<HeroClass, Stat[]> = {
  warrior: ['hp', 'attack', 'defense', 'speed'],
  archer: ['hp', 'attack', 'defense', 'speed', 'range'],
  mage: ['hp', 'attack', 'defense', 'speed', 'range', 'healing'],
}
