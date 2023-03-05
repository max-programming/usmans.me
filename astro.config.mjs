import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), image(), sitemap()],
  output: 'server',
  adapter: vercel(),
  site: 'https://usmans.me',
  vite: {
    ssr: {
      noExternal: ['millify'],
    },
  },
});
