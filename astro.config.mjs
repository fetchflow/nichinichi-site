// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Update `site` to your custom domain once set up, or leave as GitHub Pages URL.
// If deploying to a project page (github.com/fetchflow/nichinichi-site),
// also set `base: '/nichinichi-site'` and update all href/src paths accordingly.
export default defineConfig({
  site: 'https://fetchflow.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});