import type { Mission, MissionsProvider } from './api'
import type { ContinentId, Topic } from '../content/world'

/** Placeholder provider: the menu exists, the content does not yet. */
export const emptyProvider: MissionsProvider = {
  topics(_continent: ContinentId): Topic[] {
    return []
  },
  missions(_topicId: string): Mission[] {
    return []
  },
  onSolved(_mission: Mission, _correct: boolean): number {
    return 0
  },
}

export let provider: MissionsProvider = emptyProvider

export function setProvider(next: MissionsProvider): void {
  provider = next
}
