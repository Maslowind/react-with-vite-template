import { defineConfig } from 'vite';
import { resolve as _resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: _resolve(__dirname, 'src') },
    ],
  },
})
