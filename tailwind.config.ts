/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			animation: {
				wave: "spin 8s linear infinite",
			},
			colors: {
				brown: "#a09b65",
				green: "#4b7121",
				orange: "#ff9933",
				x: "#0F1419",
				youtube: "#ff0033",
				tiktok: "#000000",
			},
			width: {
				container: "1280px",
			},
			zIndex: {
				menu: 150,
				header: 100,
				panel: 50,
				base: 0,
				background: -1,
			},
		},
	},
	plugins: [],
};
