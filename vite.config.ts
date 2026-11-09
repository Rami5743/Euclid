import { defineConfig } from 'vite'

/**
 * The development entry point lives in app/, and the production build is
 * written to the repository root: GitHub Pages serves this repository's root
 * directly, so the built index.html and assets/ have to be there - and are
 * committed. Sources stay in src/.
 */
export default defineConfig({
  root: 'app',
  base: './',
  build: {
    target: 'es2022',
    outDir: '..',
    // The root holds the sources too, so it must never be wiped. Stale asset
    // files are removed by the build script instead.
    emptyOutDir: false,
  },
})
