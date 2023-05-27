import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build:{
    outDir: 'dist',
    rollupOptions: {
      input: {
        inicio: './src/pages/inicio/index.html',
        contacto: './src/pages/contactenos/index.html',
        servicios: './src/pages/servicios/index.html',
        nosotros: './src/pages/sobreNosotros/index.html',
      }
    }
  }
});
