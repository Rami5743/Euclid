/**
 * The world: seven continents in the order the curriculum teaches them. A
 * continent opens only once the one before it has been fully conquered.
 *
 * Positions are real longitude and latitude, so the continent maps are a zoom
 * into the same drawn world map rather than separate pictures.
 */

export type ContinentId =
  | 'asia'
  | 'australia'
  | 'africa'
  | 'europe'
  | 'samerica'
  | 'namerica'
  | 'antarctica'

export interface Topic {
  id: string
  name: string
}

export interface Fortress {
  id: string
  name: string
  /** Position in the campaign ladder, 1 to 21. The player's own fortress is 0. */
  level: number
  /** multiplier applied to the enemy's hit points, attack and defense */
  difficulty: number
  /**
   * Stars that need to be invested in upgrades before this fortress becomes
   * winnable. Measured with tools/balance.ts, not guessed.
   */
  starsNeeded: number
  lon: number
  lat: number
  /** the player's own fortress: never attacked, it is where the campaign starts */
  home?: boolean
}

/** A longitude and latitude window of the world map. */
export interface GeoRect {
  lon0: number
  lat0: number
  lon1: number
  lat1: number
}

export interface Continent {
  id: ContinentId
  name: string
  domain: string
  /** campaign order, starting at 1 */
  order: number
  topics: Topic[]
  fortresses: Fortress[]
  /** where to put the continent's marker on the world map */
  lon: number
  lat: number
  /** the window the continent map zooms into */
  view: GeoRect
}

export const CONTINENTS: Continent[] = [
  {
    id: 'asia',
    name: 'אסיה',
    domain: 'מספרים מכוונים',
    order: 1,
    lon: 95, lat: 35,
    view: { lon0: 55, lat0: 0, lon1: 150, lat1: 60 },
    topics: [
      { id: 'grid-q1', name: 'מערכת צירים ברביע הראשון' },
      { id: 'negatives', name: 'מספרים שליליים ומספרים נגדיים' },
      { id: 'add-sub', name: 'חיבור וחיסור מספרים מכוונים' },
    ],
    fortresses: [
      { id: 'asia-home', name: 'מצודת הבית', level: 0, difficulty: 0, starsNeeded: 0, lon: 70, lat: 25, home: true },
      { id: 'asia-1', name: 'מגדל הציר', level: 1, difficulty: 0.6, starsNeeded: 0, lon: 90, lat: 40 },
      { id: 'asia-2', name: 'חומות המשי', level: 2, difficulty: 1.1, starsNeeded: 8, lon: 115, lat: 32 },
      { id: 'asia-3', name: 'מבצר הדרקון', level: 3, difficulty: 1.15, starsNeeded: 24, lon: 128, lat: 45 },
    ],
  },
  {
    id: 'australia',
    name: 'אוסטרליה',
    domain: 'כפל, חילוק וחזקות',
    order: 2,
    lon: 134, lat: -25,
    view: { lon0: 110, lat0: -48, lon1: 180, lat1: -8 },
    topics: [
      { id: 'grid-full', name: 'הרחבת מערכת הצירים' },
      { id: 'mul-div', name: 'כפל וחילוק מספרים מכוונים' },
      { id: 'powers', name: 'חזקות עם מעריך טבעי ושורש ריבועי' },
    ],
    fortresses: [
      { id: 'australia-home', name: 'מצודת הבית', level: 0, difficulty: 0, starsNeeded: 0, lon: 133, lat: -24, home: true },
      { id: 'australia-1', name: 'מבצר האלמוגים', level: 4, difficulty: 1.18, starsNeeded: 40, lon: 147, lat: -32 },
      { id: 'australia-2', name: 'חומת המדבר', level: 5, difficulty: 1.21, starsNeeded: 56, lon: 118, lat: -26 },
      { id: 'australia-3', name: 'מגדל הערפל', level: 6, difficulty: 1.24, starsNeeded: 75, lon: 172, lat: -42 },
    ],
  },
  {
    id: 'africa',
    name: 'אפריקה',
    domain: 'זוויות',
    order: 3,
    lon: 20, lat: 5,
    view: { lon0: -20, lat0: -36, lon1: 52, lat1: 38 },
    topics: [
      { id: 'angles', name: 'זוויות: מדידה, אומדן וחוצה זווית' },
      { id: 'angle-pairs', name: 'זוויות צמודות וקודקודיות' },
      { id: 'triangle-angles', name: 'זוויות במשולש ובמרובע' },
    ],
    fortresses: [
      { id: 'africa-home', name: 'מצודת הבית', level: 0, difficulty: 0, starsNeeded: 0, lon: 18, lat: 10, home: true },
      { id: 'africa-1', name: 'מבצר הזווית', level: 7, difficulty: 1.27, starsNeeded: 95, lon: 30, lat: -4 },
      { id: 'africa-2', name: 'חומות החול', level: 8, difficulty: 1.3, starsNeeded: 120, lon: 24, lat: 24 },
      { id: 'africa-3', name: 'מצודת הכף', level: 9, difficulty: 1.33, starsNeeded: 150, lon: 25, lat: -28 },
    ],
  },
  {
    id: 'europe',
    name: 'אירופה',
    domain: 'ביטויים אלגבריים',
    order: 4,
    lon: 15, lat: 50,
    view: { lon0: -12, lat0: 34, lon1: 42, lat1: 72 },
    topics: [
      { id: 'variable', name: 'המשתנה' },
      { id: 'expressions', name: 'ביטויים אלגבריים' },
      { id: 'identity', name: 'שוויון בין ביטויים אלגבריים' },
      { id: 'like-terms', name: 'כינוס איברים דומים וחוק הפילוג' },
    ],
    fortresses: [
      { id: 'europe-home', name: 'מצודת הבית', level: 0, difficulty: 0, starsNeeded: 0, lon: 9, lat: 48, home: true },
      { id: 'europe-1', name: 'טירת הנעלם', level: 10, difficulty: 1.36, starsNeeded: 185, lon: 2, lat: 46 },
      { id: 'europe-2', name: 'מבצר הגשר', level: 11, difficulty: 1.39, starsNeeded: 225, lon: 21, lat: 52 },
      { id: 'europe-3', name: 'ארמון הצפון', level: 12, difficulty: 1.42, starsNeeded: 275, lon: 28, lat: 61 },
    ],
  },
  {
    id: 'samerica',
    name: 'דרום אמריקה',
    domain: 'משוואות',
    order: 5,
    lon: -60, lat: -15,
    view: { lon0: -85, lat0: -56, lon1: -32, lat1: 14 },
    topics: [
      { id: 'equation-id', name: 'משוואה וזיהוי פתרון' },
      { id: 'linear-eq', name: 'פתרון משוואה ממעלה ראשונה' },
      { id: 'word-problems', name: 'שאלות בהקשרים ובעיות תנועה' },
      { id: 'graph-points', name: 'נקודות על גרף' },
    ],
    fortresses: [
      { id: 'samerica-home', name: 'מצודת הבית', level: 0, difficulty: 0, starsNeeded: 0, lon: -58, lat: -8, home: true },
      { id: 'samerica-1', name: 'מבצר האנדים', level: 13, difficulty: 1.45, starsNeeded: 330, lon: -70, lat: -16 },
      { id: 'samerica-2', name: 'חומות היער', level: 14, difficulty: 1.48, starsNeeded: 395, lon: -50, lat: -20 },
      { id: 'samerica-3', name: 'מצודת הקרח', level: 15, difficulty: 1.51, starsNeeded: 470, lon: -67, lat: -42 },
    ],
  },
  {
    id: 'namerica',
    name: 'צפון אמריקה',
    domain: 'שטחים, גופים ופיתגורס',
    order: 6,
    lon: -100, lat: 45,
    view: { lon0: -170, lat0: 8, lon1: -50, lat1: 75 },
    topics: [
      { id: 'congruence', name: 'צורות חופפות וטרנספורמציות' },
      { id: 'areas', name: 'שטחים' },
      { id: 'perimeters', name: 'היקפים' },
      { id: 'solids', name: 'גופים במרחב: קובייה, תיבה ומנסרה' },
      { id: 'pythagoras', name: 'משפט פיתגורס ושימושיו' },
    ],
    fortresses: [
      { id: 'namerica-home', name: 'מצודת הבית', level: 0, difficulty: 0, starsNeeded: 0, lon: -98, lat: 40, home: true },
      { id: 'namerica-1', name: 'מבצר המפרץ', level: 16, difficulty: 1.54, starsNeeded: 560, lon: -82, lat: 33 },
      { id: 'namerica-2', name: 'חומות הקניון', level: 17, difficulty: 1.57, starsNeeded: 660, lon: -115, lat: 42 },
      { id: 'namerica-3', name: 'מצודת הצפון', level: 18, difficulty: 1.6, starsNeeded: 780, lon: -105, lat: 62 },
    ],
  },
  {
    id: 'antarctica',
    name: 'אנטארקטיקה',
    domain: 'שכיחות והסתברות',
    order: 7,
    lon: 0, lat: -80,
    view: { lon0: -180, lat0: -90, lon1: 180, lat1: -62 },
    topics: [
      { id: 'data', name: 'איסוף, ייצוג וקריאת מידע' },
      { id: 'frequency', name: 'שכיחות' },
      { id: 'rel-frequency', name: 'שכיחות יחסית ואחוזים' },
      { id: 'probability', name: 'הסתברות בהקשר של שכיחות יחסית' },
    ],
    fortresses: [
      { id: 'antarctica-home', name: 'מצודת הבית', level: 0, difficulty: 0, starsNeeded: 0, lon: 0, lat: -78, home: true },
      { id: 'antarctica-1', name: 'מבצר הקרחון', level: 19, difficulty: 1.63, starsNeeded: 910, lon: -90, lat: -80 },
      { id: 'antarctica-2', name: 'חומות הסערה', level: 20, difficulty: 1.65, starsNeeded: 1050, lon: 90, lat: -79 },
      { id: 'antarctica-3', name: 'ארמון הגורל', level: 21, difficulty: 1.68, starsNeeded: 1250, lon: 165, lat: -81 },
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

/** The fortresses of a continent that have to be taken. */
export function enemyFortresses(continent: Continent): Fortress[] {
  return continent.fortresses.filter((f) => !f.home)
}
