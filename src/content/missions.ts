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
  {
    id: 'australia-sum-letters',
    continent: 'australia',
    topicId: 'mul-div',
    title: 'חיבור בטור עם אותיות',
    kind: 'alphametic-sum',
    requires: ['australia-product'],
  },
  {
    id: 'australia-product-letters',
    continent: 'australia',
    topicId: 'mul-div',
    title: 'כפל בטור עם אותיות',
    kind: 'alphametic-product',
    requires: ['australia-sum-letters'],
  },
  {
    id: 'africa-aim',
    continent: 'africa',
    topicId: 'angles',
    title: 'כוון את הקרן',
    kind: 'angle-aim',
    requires: ['australia-product'],
  },
  {
    id: 'africa-straight',
    continent: 'africa',
    topicId: 'angle-pairs',
    title: 'זוויות צמודות',
    kind: 'angle-straight',
    requires: ['africa-aim'],
  },
  {
    id: 'africa-triangle',
    continent: 'africa',
    topicId: 'triangle-angles',
    title: 'סכום במשולש',
    kind: 'angle-triangle',
    requires: ['africa-straight'],
  },
  {
    id: 'africa-isosceles',
    continent: 'africa',
    topicId: 'triangle-angles',
    title: 'שתי שוקיים',
    kind: 'angle-isosceles',
    requires: ['africa-triangle'],
  },
  {
    id: 'europe-machine',
    continent: 'europe',
    topicId: 'variable',
    title: 'מכונת המספרים',
    kind: 'machine',
    requires: ['africa-straight'],
  },
  {
    id: 'europe-terms',
    continent: 'europe',
    topicId: 'like-terms',
    title: 'קופסאות שוות',
    kind: 'like-terms',
    requires: ['europe-machine'],
  },
  {
    id: 'europe-balance',
    continent: 'europe',
    topicId: 'equation-id',
    title: 'מאזניים',
    kind: 'balance',
    requires: ['europe-terms'],
  },
  {
    id: 'samerica-balance',
    continent: 'samerica',
    topicId: 'linear-eq',
    title: 'נעלם בשני הצדדים',
    kind: 'balance-both',
    requires: ['europe-balance'],
  },
  {
    id: 'samerica-quest',
    continent: 'samerica',
    topicId: 'word-problems',
    title: 'קווסט',
    kind: 'quest',
    requires: ['samerica-balance'],
  },
  {
    id: 'samerica-chase',
    continent: 'samerica',
    topicId: 'word-problems',
    title: 'מרדף',
    kind: 'chase',
    requires: ['samerica-quest'],
  },
  {
    id: 'samerica-shift',
    continent: 'samerica',
    topicId: 'graph-points',
    title: 'הזזת גרף',
    kind: 'shift',
    requires: ['samerica-chase'],
  },
]

export function missionById(id: string): MissionSpec | undefined {
  return MISSIONS.find((m) => m.id === id)
}

export function missionsOf(continent: string): MissionSpec[] {
  return MISSIONS.filter((m) => m.continent === continent)
}
