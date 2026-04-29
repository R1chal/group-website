// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://r1chal.github.io',
  base: '/group-website',
  vite: {
    plugins: [tailwindcss()]
  }
});