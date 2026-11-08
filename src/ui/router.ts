/**
 * Hash based router. No server is involved, so a refresh or a shared link
 * always resolves on the client - which also keeps the game deployable as a
 * plain static site.
 */

export interface Screen {
  el: HTMLElement
  destroy?: () => void
}

export type ScreenFactory = (params: Record<string, string>) => Screen

interface Route {
  pattern: string[]
  factory: ScreenFactory
}

const routes: Route[] = []
let fallback: ScreenFactory | null = null
let host: HTMLElement | null = null
let active: Screen | null = null

export function route(pattern: string, factory: ScreenFactory): void {
  routes.push({ pattern: pattern.split('/').filter(Boolean), factory })
}

export function notFound(factory: ScreenFactory): void {
  fallback = factory
}

export function navigate(path: string): void {
  if (location.hash === '#' + path) render()
  else location.hash = path
}

export function back(): void {
  if (history.length > 1) history.back()
  else navigate('/')
}

export function currentPath(): string {
  return location.hash.replace(/^#/, '') || '/'
}

function match(path: string): { factory: ScreenFactory; params: Record<string, string> } | null {
  const parts = path.split('/').filter(Boolean)
  for (const r of routes) {
    if (r.pattern.length !== parts.length) continue
    const params: Record<string, string> = {}
    let ok = true
    for (let i = 0; i < r.pattern.length; i++) {
      const seg = r.pattern[i]!
      const val = parts[i]!
      if (seg.startsWith(':')) params[seg.slice(1)] = decodeURIComponent(val)
      else if (seg !== val) { ok = false; break }
    }
    if (ok) return { factory: r.factory, params }
  }
  return null
}

function render(): void {
  if (!host) return
  active?.destroy?.()
  host.replaceChildren()
  const path = currentPath()
  const hit = match(path)
  const factory = hit?.factory ?? fallback
  if (!factory) return
  active = factory(hit?.params ?? {})
  host.append(active.el)
  host.scrollTop = 0
}

export function startRouter(mountPoint: HTMLElement): void {
  host = mountPoint
  addEventListener('hashchange', render)
  render()
}
