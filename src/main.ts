import './styles.css'
import { route, notFound, startRouter, navigate, type Screen } from './ui/router'
import { el, page } from './ui/components/layout'
import { worldMapScreen } from './ui/screens/worldMap'
import { continentScreen } from './ui/screens/continent'
import { battleScreen } from './ui/screens/battle'
import { resultScreen } from './ui/screens/result'
import { upgradesScreen } from './ui/screens/upgrades'
import { missionsScreen } from './ui/screens/missions'
import { setupScreen } from './ui/screens/setup'
import { missionScreen } from './ui/screens/mission'
import { profile } from './state/profile'

route('/', worldMapScreen)
route('/continent/:id', continentScreen)
route('/battle/:id', battleScreen)
route('/result/:id/:outcome', resultScreen)
route('/upgrades', upgradesScreen)
route('/missions', missionsScreen)
route('/missions/:id', missionsScreen)
route('/mission/:id', missionScreen)
route('/setup', setupScreen)

notFound((): Screen => {
  const b = el('button', { class: 'btn primary', type: 'button' }, 'למפת העולם')
  b.addEventListener('click', () => navigate('/'))
  return page({ title: 'הדף לא נמצא', showBack: false }, b)
})

// First visit: name the heroes before anything else.
if (!profile().flags.setupDone && (location.hash === '' || location.hash === '#/')) location.hash = '/setup'

const host = document.getElementById('app')
if (host) startRouter(host)
