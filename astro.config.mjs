import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import million from 'million/compiler';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  site: 'https://usmans.me',
  vite: {
    plugins: [million.vite({ mode: 'react', server: true, auto: true })],
    ssr: {
      noExternal: ['usehooks-ts'],
    },
  },
});
