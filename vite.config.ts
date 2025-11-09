import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite Configuration
 * 
 * This configuration sets up Vite for React development and production builds.
 * It's optimized for deployment to GitHub Pages.
 */
export default defineConfig({
  // Enable React plugin for JSX support and hot reload
  plugins: [react()],
  
  // Base path for GitHub Pages deployment
  // Should match your repository name
  base: '/yansun0419-ux.github.io/',
  
  // Build configuration
  build: {
    outDir: 'dist', // Output directory for production build
  },
})