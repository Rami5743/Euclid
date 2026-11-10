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
  {
    id: 'asia-jumps',
    continent: 'asia',
    topicId: 'add-sub',
    title: 'קפיצות',
    kind: 'jumps',
    requires: ['asia-treasure'],
  },
  {
    id: 'asia-voyage',
    continent: 'asia',
    topicId: 'add-sub',
    title: 'מסע הספינה',
    kind: 'voyage',
    requires: ['asia-treasure'],
  },
  {
    id: 'asia-quadrant',
    continent: 'asia',
    topicId: 'grid-full',
    title: 'האוצר ברביע',
    kind: 'quadrant',
    requires: ['asia-treasure'],
  },
  {
    id: 'asia-mirror',
    continent: 'asia',
    topicId: 'grid-full',
    title: 'מראה',
    kind: 'mirror',
    requires: ['asia-quadrant'],
  },
  {
    id: 'australia-product',
    continent: 'australia',
    topicId: 'mul-div',
    title: 'מלבן המכפלה',
    kind: 'product',
    requires: ['asia-quadrant'],
  },
  {
    id: 'australia-powers',
    continent: 'australia',
    topicId: 'powers',
    title: 'סולם החזקות',
    kind: 'powers',
    requires: ['australia-product'],
  },
  {
    id: 'australia-square',
    continent: 'australia',
    topicId: 'powers',
    title: 'הריבוע השלם',
    kind: 'perfect-square',
    requires: ['australia-powers'],
  },
]

export function missionById(id: string): MissionSpec | undefined {
  return MISSIONS.find((m) => m.id === id)
}

export function missionsOf(continent: string): MissionSpec[] {
  return MISSIONS.filter((m) => m.continent === continent)
}
