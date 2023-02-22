import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
import image from '@astrojs/image';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), image()],
  output: 'server',
  adapter: vercel(),
  site: 'https://usmans.me',
  vite: {
    plugins: [viteCommonjs()],
  },
});
