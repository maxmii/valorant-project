import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        // Preserve /api prefix when forwarding requests
        rewrite: (path) => path
      }
    }
  },
  build: {
    sourcemap: true,
  },
  // Ensure sourcemaps work in development
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  // Force enable sourcemaps in browser
  css: {
    devSourcemap: true
  }
})
