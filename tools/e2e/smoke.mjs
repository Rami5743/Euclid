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
  const go = async (hash) => {
    await page.goto(BASE + hash)
    await page.waitForTimeout(220)
  }

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
  await shot('04-battle')
  await page.getByRole('button', { name: 'ניצחון (זמני)' }).click()
  await page.waitForTimeout(220)
  check('result screen reached', page.url().includes('#/result/'))
  check('first battle grants stars', (await page.locator('.stars').innerText()).includes('8'))
  await shot('05-result')

  console.log('upgrades and missions')
  await go('#/upgrades')
  check('upgrade rows are shown', (await page.locator('.stat-row').count()) > 10)
  for (let i = 0; i < 8 && (await page.locator('.modal').count()) === 0; i++) {
    await page.locator('.stat-row .btn').first().click()
    await page.waitForTimeout(80)
  }
  check('"want more stars?" modal appears', (await page.locator('.modal').count()) === 1)
  await shot('06-modal')
  await page.getByRole('button', { name: 'לתפריט המשימות' }).click()
  await page.waitForTimeout(220)
  check('modal leads to the missions menu', page.url().includes('#/missions'))
  check('all curriculum topics listed', (await page.locator('.topic').count()) === 26)
  check('every topic is still marked as coming soon', (await page.locator('.topic.soon').count()) === 26)
  await shot('07-missions')

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
