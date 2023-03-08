import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/edge';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  output: 'server',
  adapter: vercel(),
  site: 'https://usmans.me',
  vite: {
    ssr: {
      noExternal: ['usehooks-ts'],
    },
  },
});
