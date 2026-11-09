import { HERO_NAMES, HERO_TITLES, heroTitle, type Gender, type HeroClass } from '../../content/heroes'
import { profile, updateProfile } from '../../state/profile'
import { el, page } from '../components/layout'
import { navigate, type Screen } from '../router'

const SUGGESTIONS: Record<HeroClass, Record<Gender, string[]>> = {
  warrior: { m: ['גדעון', 'בועז', 'אריאל'], f: ['לביאה', 'יעל', 'תמר'] },
  archer: { m: ['עידו', 'ירון', 'איתי'], f: ['אילה', 'שחר', 'נועה'] },
  mage: { m: ['אבנר', 'נדב', 'רועי'], f: ['הדס', 'מאיה', 'ליאור'] },
}

/** The male form is the default, and comes first. */
const GENDERS: Gender[] = ['m', 'f']

export function setupScreen(): Screen {
  const body = el('div', { class: 'stack' })

  const paint = (): void => {
    const p = profile()
    body.replaceChildren(
      ...(Object.keys(HERO_NAMES) as HeroClass[]).map((cls) => heroCard(cls, p.heroes[cls].gender, p.heroes[cls].name, paint)),
    )
  }
  paint()

  const done = el('button', { class: 'btn primary', type: 'button' }, 'קדימה למפה')
  done.addEventListener('click', () => {
    updateProfile((p) => {
      for (const cls of Object.keys(HERO_NAMES) as HeroClass[]) {
        const hero = p.heroes[cls]
        if (!hero.name.trim()) hero.name = SUGGESTIONS[cls][hero.gender][0]!
      }
      p.flags.setupDone = true
    })
    navigate('/')
  })

  return page(
    { title: 'הגיבורים שלי', subtitle: 'בחר מין ושם לכל אחד משלושת הגיבורים', showBack: profile().flags.setupDone },
    body,
    el('div', { class: 'row' }, done),
  )
}

function heroCard(cls: HeroClass, gender: Gender, name: string, repaint: () => void): HTMLElement {
  const input = el('input', {
    class: 'name-input',
    type: 'text',
    maxlength: '14',
    placeholder: SUGGESTIONS[cls][gender][0]!,
    value: name,
    'aria-label': `שם ה${heroTitle(cls, gender)}`,
  })
  input.addEventListener('input', () => {
    updateProfile((p) => {
      p.heroes[cls].name = input.value
    })
  })

  const genderButton = (g: Gender): HTMLElement => {
    const b = el('button', { class: `btn small${gender === g ? ' primary' : ''}`, type: 'button' },
      HERO_TITLES[cls][g])
    b.addEventListener('click', () => {
      updateProfile((p) => {
        p.heroes[cls].gender = g
      })
      repaint()
    })
    return b
  }

  const chips = SUGGESTIONS[cls][gender].map((s) => {
    const c = el('button', { class: 'chip', type: 'button' }, s)
    c.addEventListener('click', () => {
      updateProfile((p) => {
        p.heroes[cls].name = s
      })
      repaint()
    })
    return c
  })

  // The two buttons carry the names themselves, so the card needs no heading.
  return el('section', { class: 'card hero-setup' },
    el('div', { class: 'setup-row' }, ...GENDERS.map(genderButton)),
    el('div', { class: 'setup-row' }, input),
    el('div', { class: 'setup-row chips' }, ...chips),
  )
}
