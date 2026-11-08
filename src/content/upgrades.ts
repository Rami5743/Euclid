import type { Stat } from './heroes'

/** Star price of each successive level, per parameter. */
const COSTS = [2, 3, 5, 8, 12, 17, 23, 30]

export const MAX_LEVEL = COSTS.length

/** Each level multiplies the base value of the parameter by this factor. */
export const STEP = 0.08

export function costOfNextLevel(level: number): number | null {
  return level >= MAX_LEVEL ? null : COSTS[level]!
}

export function multiplier(level: number): number {
  return 1 + STEP * level
}

/** Stars granted once, right after the first battle, to open the upgrade loop. */
export const FIRST_BATTLE_GRANT = 8

export function effectiveValue(base: number, _stat: Stat, level: number): number {
  return base * multiplier(level)
}

/** Total cost of reaching a level from zero. */
export function cumulativeCost(level: number): number {
  let sum = 0
  for (let i = 0; i < Math.min(level, MAX_LEVEL); i++) sum += COSTS[i]!
  return sum
}
