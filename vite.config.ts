// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dooballsod/', // 👈 VERY important for GitHub Pages to set the subpath
  plugins: [react()],
})
