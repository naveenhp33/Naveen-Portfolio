/**
 * Vite configuration with SEO optimizations
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // Performance optimizations for SEO
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
        },
      },
    },
    
    // CSS minification
    cssMinify: true,
    
    // Source maps disabled in production (reduces bundle size)
    sourcemap: false,
  },

  // Server configuration for development
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
    },
  },
})

