import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import {defineConfig} from 'astro/config';

export default defineConfig({
  site: 'https://jwn.gr',
  srcDir: './src',
  outDir: './dist',
  publicDir: './public',
  integrations: [mdx(), react(), sitemap()],
  server: {
    port: 4321,
    host: true, // Expose on local network.
    open: false, // Don't open browser automatically.
  },
});
