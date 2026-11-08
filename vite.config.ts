import { defineConfig } from 'vite'

// Relative base so the built site works from any static host,
// including a project page on GitHub Pages.
export default defineConfig({
  base: './',
  build: { target: 'es2022', outDir: 'dist' },
})
