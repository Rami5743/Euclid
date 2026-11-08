/**
 * Single abstraction over persistence.
 * Today: the browser's local storage. Later: a cloud profile behind a Google
 * sign-in. Nothing outside this module may touch localStorage directly, so the
 * swap stays a one-file change.
 */

export interface Store {
  read<T>(key: string): T | null
  write<T>(key: string, value: T): void
  remove(key: string): void
}

const PREFIX = 'euclid.'

class LocalStore implements Store {
  read<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(PREFIX + key)
      return raw === null ? null : (JSON.parse(raw) as T)
    } catch {
      return null
    }
  }

  write<T>(key: string, value: T): void {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value))
    } catch {
      /* private mode, quota, blocked storage: the game stays playable */
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(PREFIX + key)
    } catch {
      /* ignore */
    }
  }
}

export const store: Store = new LocalStore()
