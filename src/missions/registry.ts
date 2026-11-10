import { treasureLine } from './kinds/treasureLine'
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
}

export function moduleFor(kind: MissionKind): AnyMissionModule | undefined {
  return MODULES[kind]
}

export function isPlayable(kind: MissionKind): boolean {
  return MODULES[kind] !== undefined
}
