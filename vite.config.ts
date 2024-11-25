import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react({
    babel:{
      plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
    }
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
