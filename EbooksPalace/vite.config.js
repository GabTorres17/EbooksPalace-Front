import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/create-checkout-session': 'http://localhost:3001'
    }
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
