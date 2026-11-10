import { alphameticProduct, alphameticSum } from './kinds/alphametic'
import { aimAngle, isoscelesAngle, straightAngle, triangleAngle } from './kinds/angles'
import { jumps } from './kinds/jumps'
import { mirror } from './kinds/mirror'
import { powers } from './kinds/powers'
import { perfectSquare, product } from './kinds/product'
import { quadrant } from './kinds/quadrant'
import { treasureLine } from './kinds/treasureLine'
import { voyage } from './kinds/voyage'
import type { Board, MissionKind, MissionLogic, MissionModule } from './types'

/** A mission module with its types erased, as the screen handles it. */
export interface AnyMissionModule {
  kind: MissionKind
  generate: (seed: number) => MissionLogic<unknown, unknown>
  mount: (logic: MissionLogic<unknown, unknown>, onChange: () => void) => Board<unknown>
}

function erase<C, A>(module: MissionModule<C, A>): AnyMissionModule {
  return module as unknown as AnyMissionModule
}

const MODULES: Partial<Record<MissionKind, AnyMissionModule>> = {
  'treasure-line': erase(treasureLine),
  jumps: erase(jumps),
  voyage: erase(voyage),
  quadrant: erase(quadrant),
  mirror: erase(mirror),
  product: erase(product),
  powers: erase(powers),
  'perfect-square': erase(perfectSquare),
  'alphametic-sum': erase(alphameticSum),
  'alphametic-product': erase(alphameticProduct),
  'angle-aim': erase(aimAngle),
  'angle-straight': erase(straightAngle),
  'angle-triangle': erase(triangleAngle),
  'angle-isosceles': erase(isoscelesAngle),
}

export function moduleFor(kind: MissionKind): AnyMissionModule | undefined {
  return MODULES[kind]
}

export function isPlayable(kind: MissionKind): boolean {
  return MODULES[kind] !== undefined
}
