import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import lottie from "astro-integration-lottie";
import { defineConfig } from "astro/config";
import million from "million/compiler";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	integrations: [tailwind(), react(), sitemap(), robotsTxt(), lottie()],
	site: "https://usmans.me",
	output: "hybrid",
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
			noExternal: ["usehooks-ts"],
		},
	},
});
