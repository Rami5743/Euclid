import { alphameticProduct, alphameticSum } from './kinds/alphametic'
import { aimAngle, isoscelesAngle, straightAngle, triangleAngle } from './kinds/angles'
import { balanceBothSides, balanceSimple } from './kinds/balance'
import { buildWheel, relativeFrequency, spinWheel } from './kinds/chance'
import { chase } from './kinds/chase'
import { latticeArea } from './kinds/area'
import { buildEquilateral, buildMidpoint, buildPerpendicular } from './kinds/construct'
import { boxNet } from './kinds/net'
import { missingSide, threeSquares } from './kinds/pythagoras'
import { quest } from './kinds/quest'
import { shift } from './kinds/shift'
import { likeTerms } from './kinds/likeTerms'
import { machine } from './kinds/machine'
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
  machine: erase(machine),
  'like-terms': erase(likeTerms),
  balance: erase(balanceSimple),
  'balance-both': erase(balanceBothSides),
  quest: erase(quest),
  chase: erase(chase),
  shift: erase(shift),
  'build-midpoint': erase(buildMidpoint),
  'build-perpendicular': erase(buildPerpendicular),
  'build-equilateral': erase(buildEquilateral),
  area: erase(latticeArea),
  'pythagoras-squares': erase(threeSquares),
  'pythagoras-side': erase(missingSide),
  net: erase(boxNet),
  spin: erase(spinWheel),
  frequency: erase(relativeFrequency),
  'build-wheel': erase(buildWheel),
}

export function moduleFor(kind: MissionKind): AnyMissionModule | undefined {
  return MODULES[kind]
}

export function isPlayable(kind: MissionKind): boolean {
  return MODULES[kind] !== undefined
}
