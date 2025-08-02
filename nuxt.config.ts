// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{ rel: "icon", type: "image/png", href: "/favicon-16x16.png" },
				{ rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					type: "image/png",
					href: "/apple-touch-icon.png",
				},
				{ rel: "manifest", href: "/site.webmanifest" },
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Permanent+Marker&family=Yuji+Syuku&display=swap",
				},
			],
		},
	},
	compatibilityDate: "2024-11-01",
	components: [
		{
			path: "~/components",
			pathPrefix: true,
		},
	],
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/icon",
		"@nuxt/image",
		"nuxt-security",
		"@nuxtjs/device",
		"nuxt-easy-lightbox",
	],
	icon: {
		provider: "server",
		customCollections: [
			{
				prefix: "original",
				dir: "./public/icons",
			},
		],
	},
	tailwindcss: {
		// Options
	},
	typescript: {
		typeCheck: true,
	},
});
