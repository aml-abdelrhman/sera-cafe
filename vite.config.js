import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sera-cafe/',  
  plugins: [react()],
})
