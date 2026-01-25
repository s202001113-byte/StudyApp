import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/StudyApp/',  // <--- MOVED HERE (Must be outside 'server')
  server: {
    host: true,
    port: 80, 
    allowedHosts: [
      'vite.local',
      'desktop-3qbour1.local',
      'ilovedse.local',
      'hello.local'
    ],
  }
})