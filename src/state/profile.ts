import { store } from './storage'
import type { HeroClass, Stat } from '../content/heroes'

export interface Hero {
  cls: HeroClass
  /** cosmetic only */
  gender: 'f' | 'm'
  name: string
  /** levels bought with stars, per parameter */
  levels: Partial<Record<Stat, number>>
}

export interface Profile {
  version: 1
  heroes: Record<HeroClass, Hero>
  stars: number
  /** ids of fortresses already conquered */
  conquered: string[]
  flags: {
    /** the upgrade screen stays hidden until the first battle is over */
    sawUpgrades: boolean
    /** heroes were named and their gender chosen */
    setupDone: boolean
  }
}

const KEY = 'profile'

function freshProfile(): Profile {
  return {
    version: 1,
    heroes: {
      // Names and gender are chosen by the player in M2; empty means 'not named yet'.
      warrior: { cls: 'warrior', gender: 'm', name: '', levels: {} },
      archer: { cls: 'archer', gender: 'm', name: '', levels: {} },
      mage: { cls: 'mage', gender: 'm', name: '', levels: {} },
    },
    stars: 0,
    conquered: [],
    flags: { sawUpgrades: false, setupDone: false },
  }
}

let current: Profile = store.read<Profile>(KEY) ?? freshProfile()

type Listener = (p: Profile) => void
const listeners = new Set<Listener>()

export function profile(): Profile {
  return current
}

export function onProfileChange(fn: Listener): () => void {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function updateProfile(mutate: (p: Profile) => void): Profile {
  mutate(current)
  store.write(KEY, current)
  for (const fn of listeners) fn(current)
  return current
}

export function resetProfile(): Profile {
  current = freshProfile()
  store.write(KEY, current)
  for (const fn of listeners) fn(current)
  return current
}

export function addStars(n: number): void {
  updateProfile((p) => {
    p.stars += n
  })
}

export function isConquered(fortressId: string): boolean {
  return current.conquered.includes(fortressId)
}
