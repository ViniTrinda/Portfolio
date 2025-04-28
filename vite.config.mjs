import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  base: '/Portfolio',
  plugins: [glsl()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});