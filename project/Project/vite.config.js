// Vite configuration file
// This tells Vite how to build and serve your React app
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
