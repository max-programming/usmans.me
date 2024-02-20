import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import million from 'million/compiler';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap(), robotsTxt()],
  site: 'https://usmans.me',
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
