/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="astro-integration-lottie/env" />

interface ImportMetaEnv {
	readonly YOUTUBE_API_KEY: string;
	readonly DISCORD_WEBHOOK_URL: string;
	readonly CLOUDINARY_CLOUD_NAME: string;
	readonly CLOUDINARY_API_KEY: string;
	readonly CLOUDINARY_API_SECRET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
