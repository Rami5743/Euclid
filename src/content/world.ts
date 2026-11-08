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
  /** multiplier applied to every enemy stat; 1 = same as the player's base */
  difficulty: number
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
      { id: 'asia-home', name: 'מצודת הבית', difficulty: 0, x: 22, y: 62, home: true },
      { id: 'asia-1', name: 'מגדל הציר', difficulty: 0.8, x: 45, y: 30 },
      { id: 'asia-2', name: 'חומות הכפור', difficulty: 1.15, x: 68, y: 58 },
      { id: 'asia-3', name: 'מבצר הדרקון', difficulty: 1.6, x: 84, y: 26 },
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
      { id: 'europe-home', name: 'מצודת הבית', difficulty: 0, x: 20, y: 55, home: true },
      { id: 'europe-1', name: 'טירת הנעלם', difficulty: 1.4, x: 44, y: 32 },
      { id: 'europe-2', name: 'מבצר שני האגפים', difficulty: 1.8, x: 66, y: 62 },
      { id: 'europe-3', name: 'ארמון הסוגריים', difficulty: 2.3, x: 85, y: 34 },
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
      { id: 'africa-home', name: 'מצודת הבית', difficulty: 0, x: 24, y: 30, home: true },
      { id: 'africa-1', name: 'מבצר הזווית', difficulty: 2.0, x: 48, y: 58 },
      { id: 'africa-2', name: 'חומת המשולש', difficulty: 2.5, x: 70, y: 28 },
      { id: 'africa-3', name: 'מצודת פיתגורס', difficulty: 3.1, x: 86, y: 62 },
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
      { id: 'america-home', name: 'מצודת הבית', difficulty: 0, x: 26, y: 64, home: true },
      { id: 'america-1', name: 'מבצר המזל', difficulty: 2.8, x: 50, y: 32 },
      { id: 'america-2', name: 'מגדל הסיכויים', difficulty: 3.4, x: 72, y: 60 },
      { id: 'america-3', name: 'ארמון הגורל', difficulty: 4.0, x: 86, y: 30 },
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
