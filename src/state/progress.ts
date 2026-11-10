import { MISSIONS, missionsOf } from '../content/missions'
import { enemyFortresses, type Continent } from '../content/world'
import { CONTINENTS } from '../content/world'
import { isPlayable } from '../missions/registry'
import { MAX_STARS } from '../missions/scoring'
import type { MissionSpec } from '../missions/types'
import type { Profile } from './profile'

/** Share of a continent's mission stars that opens the continent after it. */
export const CONTINENT_GATE = 0.8

export function campaign(): Continent[] {
  return [...CONTINENTS].sort((a, b) => a.order - b.order)
}

export function bestOf(profile: Profile, missionId: string): number {
  return profile.missions[missionId] ?? 0
}

export function isMissionSolved(profile: Profile, missionId: string): boolean {
  return bestOf(profile, missionId) > 0
}

/** A mission opens once every mission it requires has been solved. */
export function isMissionOpen(spec: MissionSpec, profile: Profile): boolean {
  return isPlayable(spec.kind) && spec.requires.every((id) => isMissionSolved(profile, id))
}

export function openMissions(continent: Continent, profile: Profile): MissionSpec[] {
  return missionsOf(continent.id).filter((m) => isMissionOpen(m, profile))
}

export function playableMissions(continent: Continent): MissionSpec[] {
  return missionsOf(continent.id).filter((m) => isPlayable(m.kind))
}

export function continentStars(continent: Continent, profile: Profile): number {
  return playableMissions(continent).reduce((sum, m) => sum + bestOf(profile, m.id), 0)
}

export function continentMaxStars(continent: Continent): number {
  return playableMissions(continent).length * MAX_STARS
}

/** Enough of a continent's missions are done to move on. */
export function isComplete(continent: Continent, profile: Profile): boolean {
  const max = continentMaxStars(continent)
  if (max === 0) return false
  return continentStars(continent, profile) >= CONTINENT_GATE * max
}

/** Every fortress of the continent has been taken. */
export function isConquered(continent: Continent, profile: Profile): boolean {
  return enemyFortresses(continent).every((f) => profile.conquered.includes(f.id))
}

/** A continent opens once enough of the one before it has been done. */
export function isOpen(continent: Continent, profile: Profile): boolean {
  const order = campaign()
  const index = order.findIndex((c) => c.id === continent.id)
  if (index <= 0) return true
  return isComplete(order[index - 1]!, profile)
}

/** Every mission of the continent has been solved at least once. */
export function missionsDone(continent: Continent, profile: Profile): boolean {
  const missions = playableMissions(continent)
  return missions.length > 0 && missions.every((m) => isMissionSolved(profile, m.id))
}

/** The continent whose missions are being worked on. */
export function currentContinent(profile: Profile): Continent {
  const order = campaign()
  const open = order.filter((c) => isOpen(c, profile))
  return open.find((c) => !missionsDone(c, profile)) ?? open[open.length - 1] ?? order[0]!
}

export function totalMissions(): number {
  return MISSIONS.filter((m) => isPlayable(m.kind)).length
}
