import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import lottie from 'astro-integration-lottie';
import { defineConfig } from 'astro/config';
import million from 'million/compiler';
import robotsTxt from 'astro-robots-txt';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [react(), sitemap(), robotsTxt(), lottie(), db()],
  site: 'https://usmans.me',
  output: 'static',
  devToolbar: {
    enabled: true,
  },
  vite: {
    plugins: [
      tailwindcss(),
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
