/** Stars a mission is worth when it is solved cleanly. */
export const MAX_STARS = 5

/** A hint or a wrong answer each cost one star, and one star always remains. */
export function score(hintsUsed: number, mistakes: number): number {
  return Math.max(1, MAX_STARS - hintsUsed - mistakes)
}

/**
 * Only the improvement over the best previous solve is paid out, so a mission
 * already at full marks gives nothing further however often it is played.
 */
export function payout(best: number, current: number): number {
  return Math.max(0, current - best)
}
