// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fetchflow.github.io/nichinichi-site',
  base: '/nichinichi-site',
  vite: {
    plugins: [tailwindcss()],
  },
});