import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 80, // Keep this if you want to omit the port
    allowedHosts: [
      'vite.local',
      'desktop-3qbour1.local',
      'ilovedse.local',
      'hello.local'
    ]
  }
})