import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/test-task-vite',
  plugins: [react()],
  server: {
    port: 3000, 
    proxy: {'/api': 'https://gps.autotracker.group'}
  }
})
