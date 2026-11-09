import type { GeoRect } from '../../content/world'

/** The drawn world map, in its own coordinates. */
export const WORLD = { width: 2000, height: 1000 }

export interface Point { x: number; y: number }
export interface ViewBox { x: number; y: number; w: number; h: number }

/** Equirectangular: the same projection the world map asset is drawn with. */
export function project(lon: number, lat: number): Point {
  return {
    x: ((lon + 180) / 360) * WORLD.width,
    y: ((90 - lat) / 180) * WORLD.height,
  }
}

export const WORLD_VIEW: ViewBox = { x: 0, y: 0, w: WORLD.width, h: WORLD.height }

/**
 * The window a continent map shows, widened or heightened to the aspect of the
 * frame it is drawn in. Matching the aspect exactly is what lets a marker be
 * placed by a simple percentage of the frame.
 */
export function viewFor(rect: GeoRect, aspect: number): ViewBox {
  const a = project(rect.lon0, rect.lat0)
  const b = project(rect.lon1, rect.lat1)
  let x = Math.min(a.x, b.x)
  let y = Math.min(a.y, b.y)
  let w = Math.abs(b.x - a.x)
  let h = Math.abs(b.y - a.y)

  if (w / h < aspect) {
    const grown = h * aspect
    x -= (grown - w) / 2
    w = grown
  } else {
    const grown = w / aspect
    y -= (grown - h) / 2
    h = grown
  }
  return { x, y, w, h }
}

/** Where a point sits inside a view, in percent. */
export function toPercent(lon: number, lat: number, view: ViewBox): { left: number; top: number } {
  const p = project(lon, lat)
  return {
    left: ((p.x - view.x) / view.w) * 100,
    top: ((p.y - view.y) / view.h) * 100,
  }
}
