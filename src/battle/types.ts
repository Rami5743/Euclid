import type { HeroClass } from '../content/heroes'
import type { Rng } from './rng'

export type Side = 'player' | 'enemy'

export interface UnitStats {
  hp: number
  attack: number
  defense: number
  /** tiles per second */
  speed: number
  /** tiles */
  range: number
  /** attacks per second */
  attackRate: number
  /** mage only */
  healing?: number
  healRate?: number
}

export type Order =
  | { kind: 'auto' }
  | { kind: 'hold' }
  | { kind: 'move'; x: number; y: number }
  | { kind: 'attack'; targetId: string }

export interface Unit {
  id: string
  side: Side
  cls: HeroClass
  name: string
  gender: 'f' | 'm'
  x: number
  y: number
  hp: number
  maxHp: number
  stats: UnitStats
  order: Order
  /** whom this unit is currently shooting at, for rendering and for the AI */
  targetId: string | null
  /** seconds until the next attack */
  cooldown: number
  /** seconds until the next heal (mage) */
  healCooldown: number
  /** facing direction, -1 left or 1 right, for the sprite */
  facing: -1 | 1
  /** simulation time of the last damage taken, for the hit flash */
  lastHitAt: number
  alive: boolean
}

export type ProjectileKind = 'arrow' | 'bolt' | 'heal'

export interface Projectile {
  id: string
  kind: ProjectileKind
  side: Side
  x: number
  y: number
  targetId: string
  /** damage, or healing when kind is 'heal' */
  amount: number
  speed: number
}

export interface Arena {
  width: number
  height: number
}

export interface BattleState {
  time: number
  arena: Arena
  units: Unit[]
  projectiles: Projectile[]
  rng: Rng
  winner: Side | null
  nextId: number
}

export const TICK = 1 / 30

/** Mitigation constant of the damage formula. */
export const DEFENSE_K = 50

/** Damage before the random spread. */
export function baseDamage(attack: number, defense: number): number {
  return (attack * DEFENSE_K) / (DEFENSE_K + defense)
}

/** Half width of the random spread around the base damage. */
export const DAMAGE_SPREAD = 0.3

/** Units closer than this push each other apart. */
export const UNIT_RADIUS = 0.45
