import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui_components': path.resolve(
        __dirname,
        './src/components/ui-components'
      ),
      '@pages': path.resolve(__dirname, './src/Pages'),
      '@i18n': path.resolve(__dirname, './src/i18n'),
    },
  },
});
