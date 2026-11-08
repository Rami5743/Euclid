import { HERO_NAMES, type HeroClass } from '../../content/heroes'
import { profile, updateProfile } from '../../state/profile'
import { el, page } from '../components/layout'
import { navigate, type Screen } from '../router'

const DESCRIPTION: Record<HeroClass, string> = {
  warrior: 'נלחם במגע. הרבה חיים, הרבה כוח התקפה והרבה הגנה.',
  archer: 'נלחם מרחוק. פחות חיים, פחות כוח ופחות הגנה מהלוחם.',
  mage: 'נלחם מטווח בינוני, חלש יותר משניהם, אבל יודע גם לרפא.',
}

const SUGGESTIONS: Record<HeroClass, Record<'f' | 'm', string[]>> = {
  warrior: { f: ['לביאה', 'יעל', 'תמר'], m: ['גדעון', 'בועז', 'אריאל'] },
  archer: { f: ['אילה', 'שחר', 'נועה'], m: ['עידו', 'ירון', 'איתי'] },
  mage: { f: ['הדס', 'מאיה', 'ליאור'], m: ['אבנר', 'נדב', 'רועי'] },
}

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
    el('p', { class: 'notice' }, 'המין והשם הם ענייני מראה בלבד ואינם משפיעים על הכוחות בקרב.'),
    body,
    el('div', { class: 'row' }, done),
  )
}

function heroCard(cls: HeroClass, gender: 'f' | 'm', name: string, repaint: () => void): HTMLElement {
  const input = el('input', {
    class: 'name-input',
    type: 'text',
    maxlength: '14',
    placeholder: SUGGESTIONS[cls][gender][0]!,
    value: name,
    'aria-label': `שם ה${HERO_NAMES[cls]}`,
  })
  input.addEventListener('input', () => {
    updateProfile((p) => {
      p.heroes[cls].name = input.value
    })
  })

  const genderButton = (g: 'f' | 'm', label: string): HTMLElement => {
    const b = el('button', { class: `btn small${gender === g ? ' primary' : ''}`, type: 'button' }, label)
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

  return el('section', { class: 'card hero-setup' },
    el('h3', {}, HERO_NAMES[cls]),
    el('p', { class: 'muted' }, DESCRIPTION[cls]),
    el('div', { class: 'setup-row' }, genderButton('f', 'דמות נשית'), genderButton('m', 'דמות גברית')),
    el('div', { class: 'setup-row' }, input),
    el('div', { class: 'setup-row chips' }, ...chips),
  )
}
