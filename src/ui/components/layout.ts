import { profile, onProfileChange } from '../../state/profile'
import { navigate, back } from '../router'

export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Record<string, string> = {},
  ...children: (Node | string)[]
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag)
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v
    else node.setAttribute(k, v)
  }
  node.append(...children)
  return node
}

export interface PageOptions {
  title: string
  subtitle?: string
  /** show the back arrow */
  showBack?: boolean
  /** show the star counter, which is also the shortcut into the missions menu */
  showStars?: boolean
}

/** Standard page shell: header with the star counter, then the content. */
export function page(opts: PageOptions, ...content: (Node | string)[]): { el: HTMLElement; destroy: () => void } {
  const stars = el('button', { class: 'stars', type: 'button', title: 'תפריט המשימות' })
  const paint = (): void => {
    stars.replaceChildren(el('span', { class: 'star-icon' }, '★'), el('span', {}, String(profile().stars)))
  }
  paint()
  const unsubscribe = onProfileChange(paint)
  stars.addEventListener('click', () => navigate('/missions'))

  const header = el('header', { class: 'top' })
  if (opts.showBack !== false) {
    const b = el('button', { class: 'back', type: 'button', 'aria-label': 'חזרה' }, '→')
    b.addEventListener('click', () => back())
    header.append(b)
  }
  header.append(
    el('div', { class: 'titles' },
      el('h1', {}, opts.title),
      ...(opts.subtitle ? [el('p', { class: 'subtitle' }, opts.subtitle)] : []),
    ),
  )
  if (opts.showStars !== false) header.append(stars)

  const root = el('div', { class: 'page' }, header, el('main', { class: 'content' }, ...content))
  return { el: root, destroy: () => unsubscribe() }
}
