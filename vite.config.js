import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'slick-carousel',
      'react-slick',
    ],
  },
  build: {
    commonjsOptions: {
      include: [/slick-carousel/, /react-slick/, /node_modules/],
    },
  },
});
