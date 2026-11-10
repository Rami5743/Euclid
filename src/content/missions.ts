import type { MissionSpec } from '../missions/types'

/**
 * Every mission of the campaign, in the order they are meant to be met.
 * A mission opens once all the missions it requires have been solved, so
 * several can open at once.
 */
export const MISSIONS: MissionSpec[] = [
  {
    id: 'asia-treasure',
    continent: 'asia',
    topicId: 'grid-q1',
    title: 'אוצר על הציר',
    kind: 'treasure-line',
    requires: [],
  },
]

export function missionById(id: string): MissionSpec | undefined {
  return MISSIONS.find((m) => m.id === id)
}

export function missionsOf(continent: string): MissionSpec[] {
  return MISSIONS.filter((m) => m.continent === continent)
}
