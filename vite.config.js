import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Must match the GitHub repo name exactly for project-page Pages hosting
  // (https://<user>.github.io/<repo>/). Update if the repo is renamed.
  base: '/ems-flashcards/',
})
