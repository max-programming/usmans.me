import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import million from 'million/compiler';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sitemap(),
    robotsTxt(),
    vercel({
      isr: {
        expiration: 60 * 60 * 24,
      },
    }),
  ],
  site: 'https://usmans.me',
  output: 'hybrid',
  devToolbar: {
    enabled: true,
  },
  vite: {
    plugins: [
      // million.vite({
      //   mode: 'react',
      //   server: true,
      //   auto: true,
      //   mute: true,
      // }),
    ],
    ssr: {
      noExternal: ['usehooks-ts'],
    },
  },
});
