import { BASE_STATS, HERO_NAMES, type HeroClass } from '../../content/heroes'
import { fortressById } from '../../content/world'
import { el, page } from '../components/layout'
import { navigate, type Screen } from '../router'

/**
 * Placeholder for the real time battle (milestones M3 and M4).
 * For now it shows the line-ups and lets the flow around the battle be tested
 * end to end through two temporary buttons.
 */
export function battleScreen(params: Record<string, string>): Screen {
  const hit = fortressById(params.id ?? '')
  if (!hit) return page({ title: 'מבצר לא נמצא' }, el('p', {}, 'חזרה למפת העולם.'))
  const { continent, fortress } = hit

  const lineup = (title: string, scale: number): HTMLElement =>
    el('section', { class: 'card lineup' },
      el('h3', {}, title),
      ...(Object.keys(HERO_NAMES) as HeroClass[]).map((cls) => {
        const s = BASE_STATS[cls]
        return el('p', { class: 'muted' },
          `${HERO_NAMES[cls]}: חיים ${Math.round(s.hp * scale)}, ` +
          `התקפה ${Math.round(s.attack * scale)}, הגנה ${Math.round(s.defense * scale)}`)
      }),
    )

  const temp = el('div', { class: 'row' })
  const win = el('button', { class: 'btn primary', type: 'button' }, 'ניצחון (זמני)')
  const lose = el('button', { class: 'btn', type: 'button' }, 'הפסד (זמני)')
  win.addEventListener('click', () => navigate(`/result/${fortress.id}/win`))
  lose.addEventListener('click', () => navigate(`/result/${fortress.id}/lose`))
  temp.append(win, lose)

  return page(
    { title: fortress.name, subtitle: `${continent.name} · ${continent.domain}` },
    el('p', { class: 'notice' },
      'מנוע הקרב בזמן אמת עדיין לא נבנה. בשלב הזה אפשר לבדוק את זרימת המשחק סביב הקרב ' +
      'בעזרת שני הכפתורים הזמניים שלמטה.'),
    el('div', { class: 'grid' },
      lineup('הגיבורים שלך', 1),
      lineup('מגיני המבצר', fortress.difficulty),
    ),
    temp,
  )
}
