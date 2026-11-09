import { defineConfig } from 'vitest/config'

/**
 * Separate from vite.config.ts on purpose: the application build has its root
 * in app/, while the tests live next to the sources at the repository root.
 */
export default defineConfig({
  test: {
    root: '.',
    include: ['test/**/*.test.ts'],
  },
})
