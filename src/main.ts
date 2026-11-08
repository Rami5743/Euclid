import './styles.css'
import { route, notFound, startRouter, navigate, type Screen } from './ui/router'
import { el, page } from './ui/components/layout'
import { worldMapScreen } from './ui/screens/worldMap'
import { continentScreen } from './ui/screens/continent'
import { battleScreen } from './ui/screens/battle'
import { resultScreen } from './ui/screens/result'
import { upgradesScreen } from './ui/screens/upgrades'
import { missionsScreen } from './ui/screens/missions'

route('/', worldMapScreen)
route('/continent/:id', continentScreen)
route('/battle/:id', battleScreen)
route('/result/:id/:outcome', resultScreen)
route('/upgrades', upgradesScreen)
route('/missions', missionsScreen)

notFound((): Screen => {
  const b = el('button', { class: 'btn primary', type: 'button' }, 'למפת העולם')
  b.addEventListener('click', () => navigate('/'))
  return page({ title: 'הדף לא נמצא', showBack: false }, b)
})

const host = document.getElementById('app')
if (host) startRouter(host)
