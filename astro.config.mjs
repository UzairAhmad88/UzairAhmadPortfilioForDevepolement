import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://uzairahmad.vercel.app',
  integrations: [sitemap()],
  compressHTML: true,
  vite: {
    ssr: {
      noExternal: ['three'],
    },
  },
});
