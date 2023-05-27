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
    rollupOptions: {
      input: {
        home: 'src/pages/Inicio.jsx',
        servicios: 'src/pages/Servicios.jsx',
        contacto: 'src/pages/Contactenos.jsx',
        sobreNosotros: 'src/pages/SobreNosotros.jsx',
      },
      output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: '[name].js', // Genera un archivo para cada página con su nombre
        assetFileNames: '[name][extname]', // Genera un archivo para cada recurso estático con su nombre
      },
    },
  },
});
