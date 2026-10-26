import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Keep the generated site portable: it can be opened directly from the
  // included `ready-to-open` folder as well as uploaded to a web host.
  base: './',
  plugins: [react()],
})
