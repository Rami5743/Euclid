/** Seeded, reproducible pseudo random numbers (mulberry32). */
export interface Rng {
  (): number
  seed: number
}

export function makeRng(seed: number): Rng {
  let s = seed >>> 0
  const fn = (): number => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  const rng = fn as Rng
  rng.seed = seed
  return rng
}

/** Uniform value in [min, max). */
export function between(rng: Rng, min: number, max: number): number {
  return min + rng() * (max - min)
}
