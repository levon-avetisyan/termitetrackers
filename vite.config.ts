import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Load environment variables
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        },
      },
    },
    chunkSizeWarningLimit: 900, // Adjust this value if needed
  },
  server: !isProduction
    ? {
        proxy: {
          '/api': {
            target: process.env.API_URL, // Ensure this is set in .env file for development
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''), // Uncomment if necessary
            secure: false,
          },
        },
      }
    : undefined, // No proxy in production
});
