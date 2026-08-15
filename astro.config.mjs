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
  // Repo ini adalah project site (ccit-venture/ccit-venture-web),
  // jadi semua link & asset harus diberi prefix /ccit-venture-web/
  site: 'https://ccit-venture.github.io',
  base: '/ccit-venture-web',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
