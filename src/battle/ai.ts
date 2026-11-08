import type { BattleState, Unit } from './types'
import { distance, livingEnemies, nearest } from './sim-utils'

export type Intent =
  | { kind: 'idle' }
  | { kind: 'move'; x: number; y: number }
  | { kind: 'attack'; targetId: string }

/** Distance at which a ranged unit backs away from a melee attacker. */
export const KITE_DISTANCE = 2.2

/**
 * Behaviour of a unit left to itself. Used for every enemy unit, for the
 * player's units whenever no explicit order is standing, and by the balance
 * tool as a stand-in for a player.
 */
export function autoIntent(state: BattleState, unit: Unit): Intent {
  const enemies = livingEnemies(state, unit.side)
  if (enemies.length === 0) return { kind: 'idle' }

  const threat = nearest(unit, enemies.filter((e) => e.stats.range <= 1.5))
  const ranged = unit.stats.range > 2
  if (ranged && threat && distance(unit, threat) < KITE_DISTANCE) {
    // Step away from the melee attacker instead of trading blows with it.
    const dx = unit.x - threat.x
    const dy = unit.y - threat.y
    const len = Math.hypot(dx, dy) || 1
    return { kind: 'move', x: unit.x + (dx / len) * 3, y: unit.y + (dy / len) * 3 }
  }

  const target = nearest(unit, enemies)
  return target ? { kind: 'attack', targetId: target.id } : { kind: 'idle' }
}
