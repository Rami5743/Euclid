/**
 * The seam between the game and the learning content.
 *
 * Nothing is implemented yet: the provider below returns empty lists, and the
 * missions screen renders the curriculum topics marked "coming soon". When the
 * mission generators arrive they plug in here, and no other module changes.
 */
import type { ContinentId, Topic } from '../content/world'

export interface Mission {
  id: string
  topicId: string
  /** short prompt shown to the student */
  prompt: string
  /** stars granted on a correct answer */
  reward: number
}

export interface MissionsProvider {
  /** topics of a continent that already have missions behind them */
  topics(continent: ContinentId): Topic[]
  missions(topicId: string): Mission[]
  /** returns the number of stars awarded */
  onSolved(mission: Mission, correct: boolean): number
}
