/**
 * The world: four continents, one per mathematical domain of the 7th grade
 * curriculum (Israeli Ministry of Education, teaching plan for 2026/27).
 * Topics are listed in the order they are taught during the school year.
 */

export type ContinentId = 'asia' | 'europe' | 'africa' | 'america'

export interface Topic {
  id: string
  name: string
}

export interface Fortress {
  id: string
  name: string
  /** multiplier applied to the enemy's hit points, attack and defense */
  difficulty: number
  /**
   * Stars that need to be invested in upgrades before this fortress becomes
   * winnable. Measured with tools/balance.ts, not guessed.
   */
  starsNeeded: number
  /** Position in the campaign ladder, 1 to 12. The player's own fortress is 0. */
  level: number
  /** map position in percent of the continent map */
  x: number
  y: number
  /** the player's own fortress: never attacked, it is where the campaign starts */
  home?: boolean
}

export interface Continent {
  id: ContinentId
  name: string
  domain: string
  topics: Topic[]
  fortresses: Fortress[]
  /** map position in percent of the world map */
  x: number
  y: number
}

export const CONTINENTS: Continent[] = [
  {
    id: 'asia',
    name: 'אסיה',
    domain: 'התחום המספרי',
    x: 68, y: 38,
    topics: [
      { id: 'grid-q1', name: 'מערכת צירים ברביע הראשון' },
      { id: 'negatives', name: 'מספרים שליליים ומספרים נגדיים' },
      { id: 'add-sub', name: 'חיבור וחיסור מספרים מכוונים' },
      { id: 'grid-full', name: 'הרחבת מערכת הצירים' },
      { id: 'mul-div', name: 'כפל וחילוק מספרים מכוונים' },
      { id: 'powers', name: 'חזקות עם מעריך טבעי ושורש ריבועי' },
    ],
    fortresses: [
      { id: 'asia-home', name: 'מצודת הבית', level: 0, difficulty: 0, starsNeeded: 0, x: 22, y: 62, home: true },
      { id: 'asia-1', name: 'מגדל הציר', level: 1, difficulty: 0.85, starsNeeded: 0, x: 45, y: 30 },
      { id: 'asia-2', name: 'חומות הכפור', level: 2, difficulty: 1.1, starsNeeded: 8, x: 68, y: 58 },
      { id: 'asia-3', name: 'מבצר הדרקון', level: 3, difficulty: 1.2, starsNeeded: 32, x: 84, y: 26 },
    ],
  },
  {
    id: 'europe',
    name: 'אירופה',
    domain: 'התחום האלגברי',
    x: 50, y: 28,
    topics: [
      { id: 'variable', name: 'המשתנה' },
      { id: 'expressions', name: 'ביטויים אלגבריים' },
      { id: 'identity', name: 'שוויון בין ביטויים אלגבריים' },
      { id: 'like-terms', name: 'כינוס איברים דומים וחוק הפילוג' },
      { id: 'equation-id', name: 'משוואה וזיהוי פתרון' },
      { id: 'linear-eq', name: 'פתרון משוואה ממעלה ראשונה' },
      { id: 'word-problems', name: 'שאלות בהקשרים ובעיות תנועה' },
      { id: 'graph-points', name: 'נקודות על גרף' },
    ],
    fortresses: [
      { id: 'europe-home', name: 'מצודת הבית', level: 0, difficulty: 0, starsNeeded: 0, x: 20, y: 55, home: true },
      { id: 'europe-1', name: 'טירת הנעלם', level: 4, difficulty: 1.25, starsNeeded: 64, x: 44, y: 32 },
      { id: 'europe-2', name: 'מבצר שני האגפים', level: 5, difficulty: 1.3, starsNeeded: 100, x: 66, y: 62 },
      { id: 'europe-3', name: 'ארמון הסוגריים', level: 6, difficulty: 1.35, starsNeeded: 180, x: 85, y: 34 },
    ],
  },
  {
    id: 'africa',
    name: 'אפריקה',
    domain: 'התחום הגאומטרי',
    x: 50, y: 60,
    topics: [
      { id: 'angles', name: 'זוויות: מדידה, אומדן וחוצה זווית' },
      { id: 'angle-pairs', name: 'זוויות צמודות וקודקודיות' },
      { id: 'triangle-angles', name: 'זוויות במשולש ובמרובע' },
      { id: 'congruence', name: 'צורות חופפות וטרנספורמציות' },
      { id: 'areas', name: 'שטחים' },
      { id: 'perimeters', name: 'היקפים' },
      { id: 'solids', name: 'גופים במרחב: קובייה, תיבה ומנסרה' },
      { id: 'pythagoras', name: 'משפט פיתגורס ושימושיו' },
    ],
    fortresses: [
      { id: 'africa-home', name: 'מצודת הבית', level: 0, difficulty: 0, starsNeeded: 0, x: 24, y: 30, home: true },
      { id: 'africa-1', name: 'מבצר הזווית', level: 7, difficulty: 1.4, starsNeeded: 280, x: 48, y: 58 },
      { id: 'africa-2', name: 'חומת המשולש', level: 8, difficulty: 1.45, starsNeeded: 400, x: 70, y: 28 },
      { id: 'africa-3', name: 'מצודת פיתגורס', level: 9, difficulty: 1.5, starsNeeded: 560, x: 86, y: 62 },
    ],
  },
  {
    id: 'america',
    name: 'אמריקה',
    domain: 'תחום אי־הוודאות',
    x: 22, y: 45,
    topics: [
      { id: 'data', name: 'איסוף, ייצוג וקריאת מידע' },
      { id: 'frequency', name: 'שכיחות' },
      { id: 'rel-frequency', name: 'שכיחות יחסית ואחוזים' },
      { id: 'probability', name: 'הסתברות בהקשר של שכיחות יחסית' },
    ],
    fortresses: [
      { id: 'america-home', name: 'מצודת הבית', level: 0, difficulty: 0, starsNeeded: 0, x: 26, y: 64, home: true },
      { id: 'america-1', name: 'מבצר המזל', level: 10, difficulty: 1.55, starsNeeded: 680, x: 50, y: 32 },
      { id: 'america-2', name: 'מגדל הסיכויים', level: 11, difficulty: 1.6, starsNeeded: 800, x: 72, y: 60 },
      { id: 'america-3', name: 'ארמון הגורל', level: 12, difficulty: 1.65, starsNeeded: 1000, x: 86, y: 30 },
    ],
  },
]

export function continentById(id: string): Continent | undefined {
  return CONTINENTS.find((c) => c.id === id)
}

export function fortressById(id: string): { continent: Continent; fortress: Fortress } | undefined {
  for (const continent of CONTINENTS) {
    const fortress = continent.fortresses.find((f) => f.id === id)
    if (fortress) return { continent, fortress }
  }
  return undefined
}
