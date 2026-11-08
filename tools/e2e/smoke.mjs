/**
 * End to end smoke test. Starts a preview server, walks the whole game flow in
 * a real browser, asserts the key elements of every screen and fails on any
 * console error. Screenshots land in tools/e2e/out for a visual check.
 *
 * Usage: npm run build && node tools/e2e/smoke.mjs
 * Requires playwright to be resolvable (it is pre-installed in the dev image).
 */
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { setTimeout as sleep } from 'node:timers/promises'

const PORT = Number(process.env.PORT ?? 4173)
const BASE = `http://127.0.0.1:${PORT}/`
const OUT = new URL('./out/', import.meta.url).pathname
mkdirSync(OUT, { recursive: true })

const failures = []
function check(label, condition) {
  if (condition) console.log(`  ok   ${label}`)
  else {
    console.log(`  FAIL ${label}`)
    failures.push(label)
  }
}

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: new URL('../../', import.meta.url).pathname,
  stdio: 'ignore',
})

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(BASE)
      if (r.ok) return
    } catch { /* not up yet */ }
    await sleep(250)
  }
  throw new Error('preview server did not start')
}

const browser = await chromium.launch()
try {
  await waitForServer()
  const context = await browser.newContext({ viewport: { width: 900, height: 820 }, deviceScaleFactor: 2 })
  const page = await context.newPage()
  const consoleErrors = []
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()) })
  page.on('pageerror', (e) => consoleErrors.push(String(e)))

  const shot = (name) => page.screenshot({ path: `${OUT}${name}.png`, fullPage: true })
  // The controls are exercised at normal speed; the full battle is then replayed
  // with ?speed=12 so that it finishes inside the test.
  const go = async (hash, speed = 1) => {
    await page.goto(`${BASE}?speed=${speed}${hash}`)
    await page.waitForTimeout(220)
  }
  const unitPositions = async (p) =>
    (await p.locator('.unit').evaluateAll((nodes) => nodes.map((n) => n.getAttribute('transform')).join('|')))

  console.log('setup screen')
  await go('')
  check('first visit lands on hero setup', page.url().includes('#/setup'))
  check('three hero cards', (await page.locator('.hero-setup').count()) === 3)
  await page.locator('.hero-setup').first().locator('.chip').first().click()
  await shot('01-setup')
  await page.getByRole('button', { name: 'קדימה למפה' }).click()
  await page.waitForTimeout(220)
  check('setup leads to the world map', page.url().endsWith('#/'))

  console.log('world map')
  check('world map art is drawn', (await page.locator('.map-art svg').count()) === 1)
  check('four continent markers', (await page.locator('.marker.continent').count()) === 4)
  await shot('02-world')

  console.log('continents')
  for (const id of ['asia', 'europe', 'africa', 'america']) {
    await go(`#/continent/${id}`)
    check(`${id}: map art`, (await page.locator('.map-art svg').count()) === 1)
    check(`${id}: one home and three fortresses`,
      (await page.locator('.marker.home').count()) === 1 &&
      (await page.locator('.marker.open, .marker.done').count()) === 3)
    await shot(`03-${id}`)
  }

  console.log('battle flow')
  await go('#/continent/asia')
  await page.locator('.marker.open').first().click()
  await page.waitForTimeout(220)
  check('battle screen reached', page.url().includes('#/battle/'))
  check('the arena is drawn', (await page.locator('svg.arena').count()) === 1)
  check('six units on the field', (await page.locator('.unit').count()) === 6)
  check('three portraits in the hud', (await page.locator('.portrait').count()) === 3)
  check('the battle opens paused behind the intro panel', (await page.locator('.overlay .panel').count()) === 1)
  await shot('04-battle-intro')

  await page.getByRole('button', { name: 'התחל קרב' }).click()
  const before = await unitPositions(page)
  await page.waitForTimeout(1200)
  const after = await unitPositions(page)
  check('units move once the battle starts', before !== after)
  await shot('05-battle-running')

  await page.locator('.portrait').first().click()
  check('a portrait selects a single hero', (await page.locator('.portrait.selected').count()) === 1)
  await page.getByRole('button', { name: 'בחר הכול' }).click()
  check('"select all" selects every living hero', (await page.locator('.portrait.selected').count()) === 3)

  check('the battle is still running during the control checks',
    await page.locator('.overlay').evaluate((n) => n.classList.contains('hidden')))
  await page.locator('.hud-actions button', { hasText: 'השהה' }).click()
  const paused = await unitPositions(page)
  await page.waitForTimeout(700)
  check('pause really stops the simulation', paused === (await unitPositions(page)))
  await page.locator('.hud-actions button', { hasText: 'המשך' }).click()
  await page.waitForTimeout(500)
  check('resume starts it again', paused !== (await unitPositions(page)))

  console.log('battle to the end (accelerated)')
  await go('#/battle/asia-1', 12)
  await page.getByRole('button', { name: 'התחל קרב' }).click()
  await page.waitForSelector('.overlay:not(.hidden) .panel', { timeout: 90_000 })
  const verdict = await page.locator('.overlay .panel h2').innerText()
  check('the battle ends with a verdict', verdict === 'המבצר נכבש' || verdict === 'הקרב אבד')
  check('the easiest fortress is won without upgrades', verdict === 'המבצר נכבש')
  check('no enemy is left standing',
    (await page.locator('.unit.enemy:not(.dead)').count()) === 0)
  await shot('06-battle-end')
  await page.locator('.overlay .panel button').click()
  await page.waitForTimeout(260)
  check('result screen reached', page.url().includes('#/result/'))
  check('first battle grants stars', (await page.locator('.stars').innerText()).includes('8'))
  await shot('07-result')

  console.log('upgrades and missions')
  await go('#/upgrades')
  check('upgrade rows are shown', (await page.locator('.stat-row').count()) > 10)
  for (let i = 0; i < 8 && (await page.locator('.modal').count()) === 0; i++) {
    await page.locator('.stat-row .btn').first().click()
    await page.waitForTimeout(80)
  }
  check('"want more stars?" modal appears', (await page.locator('.modal').count()) === 1)
  await shot('08-modal')
  await page.getByRole('button', { name: 'לתפריט המשימות' }).click()
  await page.waitForTimeout(220)
  check('modal leads to the missions menu', page.url().includes('#/missions'))
  check('all curriculum topics listed', (await page.locator('.topic').count()) === 26)
  check('every topic is still marked as coming soon', (await page.locator('.topic.soon').count()) === 26)
  await shot('09-missions')

  console.log('conquered state is remembered')
  await go('#/continent/asia')
  check('a conquered fortress is marked', (await page.locator('.marker.done').count()) === 1)

  check('no console errors', consoleErrors.length === 0)
  if (consoleErrors.length) console.log(consoleErrors)
} finally {
  await browser.close()
  server.kill()
}

console.log(failures.length ? `\n${failures.length} check(s) failed` : '\nall checks passed')
process.exit(failures.length ? 1 : 0)
