// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx()],
  
  markdown: {
    shikiConfig: {
      theme: 'monokai',
      wrap: true
    }
  },

  // Konfigurasi untuk GitHub Pages
  // Repo ini adalah user/organization site (ccit-venture.github.io),
  // jadi base dibiarkan '/' (akar domain) tanpa subpath.
  site: 'https://ccit-venture.github.io',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
