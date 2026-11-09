# Euclid

משחק אסטרטגיה ללימוד מתמטיקה בכיתה ז. השחקן כובש מבצרים בשבע יבשות, לפי סדר
ההוראה של תוכנית הלימודים, ומשדרג שלושה גיבורים בעזרת כוכבים שמתקבלים על פתרון
משימות במתמטיקה. יבשת נפתחת רק אחרי שקודמתה נכבשה, ונושא לימוד נפתח רק אחרי
שהנושא שלפניו נפתר.

```
Stack:  TypeScript + Vite · SVG rendering · localStorage · static hosting
Run:    npm install && npm run dev
Build:  npm run build      (type check + production bundle in dist/)
```

## Structure

```
app/          development entry point (index.html)
index.html    build output, committed, served by GitHub Pages
assets/       build output, committed
src/
  state/      profile + storage abstraction (localStorage today, cloud later)
  content/    world (continents, fortresses, curriculum topics), heroes, upgrades
  missions/   the seam to the learning content - empty on purpose for now
  ui/         hash router, shared components, one module per screen
  battle/     real time simulation (M3) - not written yet
  render/     SVG scene and sprites (M4, M7) - not written yet
tools/        headless balance simulation (M6) - not written yet
```

## Milestones

- **M0 - framework (done).** Router, screens, profile state, star economy,
  upgrade screen, "want more stars?" modal, empty missions menu.
- **M1 - maps (done).** Drawn world and continent maps with interactive markers.
- **M2 - heroes (done).** Gender and name for each of the three heroes.
- **M3 - simulation (done).** Deterministic battle simulation, headless, tested.
- **M4 - battle (done).** SVG rendering, pointer controls for touch and mouse.
- **M5 - results (done).** Battle outcome feeding the star economy.
- **M6 - balance (done).** Difficulty and star figures measured, not guessed:
  `npm run balance` prints the win rate for every combination of fortress
  difficulty and star budget, and `npm run balance:check` verifies the numbers
  the game ships with.
- **M7 - art (done).** Detailed vector sprites for the three heroes in two
  variants each, a drawn battlefield, fallen heroes, walking and striking
  animation, fireballs, floating damage, selection and healing effects.

## What is not built yet

The missions themselves. `src/missions` is a working seam with an empty
provider, and the menu lists the curriculum topics marked as coming soon.
Everything else - maps, battles, upgrades, the star economy - is in place and
tested, so adding missions means implementing `MissionsProvider` and nothing
else.

Two things to decide when the missions arrive: how many stars a solved mission
is worth, and whether the campaign's full ladder (about a thousand stars from
the first fortress to the last) matches the number of missions a year of
seventh grade actually offers.

## The world

Seven continents, in the order the curriculum teaches their topics: Asia,
Australia, Africa, Europe, South America, North America, Antarctica. Twenty one
fortresses in all, three per continent, plus the player's own fortress in each.

Everything is placed by real longitude and latitude. There is one drawn world
map; a continent map is the same art zoomed into that continent's window, so
the two always agree. `src/render/maps/projection.ts` holds the projection, and
`tools/genworld.py` regenerates the map asset from its coastline outlines.

A continent opens only once the one before it is fully conquered, and the
missions menu shows only the continent being played and only the topics that
are open: the first from the start, each next one after the one before it is
solved.

## Balance

The campaign is a ladder of twelve fortresses. Each one carries a difficulty
multiplier on the enemy's hit points, attack and defense, and the number of
stars the player needs to have invested in upgrades before it becomes winnable.
Both numbers come from `tools/balance.ts`, which runs hundreds of headless
battles per cell with the simulation's own AI on both sides. Since a real
player plays better than that AI, the measured rates are a lower bound.

The tool measures two styles, which bracket a real player: *active*, where the
simulation's own AI moves and heals, and *passive*, where the heroes hold their
ground and never heal - exactly what happens on screen when no orders are
given. On screen the player's side is hand commanded: it never walks off on its
own and never heals on its own.

The rules of the opening, verified on every run of `npm run check`: the first
fortress is won without any upgrades and without a single order, the second
cannot be won without upgrades, it becomes winnable but barely after the eight
stars granted at the end of the first battle, and the third stays out of reach.
Every one of the twenty one fortresses is also checked to be a real challenge
at its own star figure, and comfortable at four times it.

## Design decisions

- **No server.** Everything runs in the browser. A future Google sign-in
  replaces `src/state/storage.ts` only.
- **Pointer, not mouse.** Controls are built for touch and mouse alike: tap a
  hero to select it, tap a target to order an attack, tap the ground to move.
  There is no right-click-only action anywhere.
- **Simulation separated from rendering.** The battle runs on a fixed time step
  with no reference to the DOM, so the same code can be run headless hundreds of
  times to calibrate difficulty.
- **Difficulty by a single multiplier** per fortress on every enemy stat, which
  keeps the progression curve tunable from one number.

## Published site

https://rami5743.github.io/Euclid/

GitHub Pages serves this repository's root exactly as it is, so the built site
lives there and is committed: `index.html` and `assets/` are build output, not
sources. The development entry point is `app/index.html`, and `npm run build`
writes the production files to the root.

**After changing anything under `src/`, run `npm run build` and commit the
result**, otherwise the published site stays on the previous version. The CI
workflow fails when the committed build no longer matches the sources.

## Testing

```
npm run check      type check + unit tests + balance check + browser test
npm test           unit tests only (the simulation)
npm run balance    the win rate table used for tuning
npm run e2e        the browser test alone, screenshots in tools/e2e/out
```

## Curriculum source

Topics and their order follow the official teaching plan for 7th grade,
Israeli Ministry of Education, school year 2026/27.
