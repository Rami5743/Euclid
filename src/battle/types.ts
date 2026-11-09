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
  /** simulation time of the last blow struck, for the attack animation */
  lastAttackAt: number
  alive: boolean
}

export type ProjectileKind = 'arrow' | 'fire' | 'heal'

export interface Projectile {
  id: string
  kind: ProjectileKind
  side: Side
  x: number
  y: number
  /** direction of travel in radians, for drawing */
  angle: number
  targetId: string
  /** damage, or healing when kind is 'heal' */
  amount: number
  speed: number
}

/** Render only: something worth showing above a unit's head. */
export interface BattleEvent {
  kind: 'damage' | 'heal'
  unitId: string
  amount: number
  time: number
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
  /** recent damage and healing, for the renderer; pruned as time passes */
  events: BattleEvent[]
  rng: Rng
  winner: Side | null
  nextId: number
  /**
   * The side a person commands by hand. Its units never walk off on their own
   * and never heal on their own: they hold their ground, strike what comes
   * into reach, and do anything else only when ordered. The other side, and
   * both sides in the headless balance runs, act by themselves.
   */
  manual: Side | null
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
