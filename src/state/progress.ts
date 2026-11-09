import { CONTINENTS, enemyFortresses, type Continent, type Topic } from '../content/world'
import type { Profile } from './profile'

/** Continents in campaign order. */
export function campaign(): Continent[] {
  return [...CONTINENTS].sort((a, b) => a.order - b.order)
}

export function isConquered(continent: Continent, profile: Profile): boolean {
  return enemyFortresses(continent).every((f) => profile.conquered.includes(f.id))
}

/** A continent opens once the one before it has been taken completely. */
export function isOpen(continent: Continent, profile: Profile): boolean {
  const order = campaign()
  const index = order.findIndex((c) => c.id === continent.id)
  if (index <= 0) return true
  return isConquered(order[index - 1]!, profile)
}

/** The continent the campaign is standing on: the first one not yet taken. */
export function currentContinent(profile: Profile): Continent {
  const order = campaign()
  return order.find((c) => !isConquered(c, profile)) ?? order[order.length - 1]!
}

/**
 * Topics open one after another: the first one from the start, and each next
 * one once the one before it has been solved.
 */
export function openTopics(continent: Continent, profile: Profile): Topic[] {
  const open: Topic[] = []
  for (const topic of continent.topics) {
    open.push(topic)
    if (!profile.solvedTopics.includes(topic.id)) break
  }
  return open
}

export function isTopicOpen(continent: Continent, topicId: string, profile: Profile): boolean {
  return openTopics(continent, profile).some((t) => t.id === topicId)
}
