/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./icons/**/*.{js,ts,jsx,tsx}",
		"./utils/**/*.{js,ts,jsx,tsx}",
		"./atoms/**/*.{js,ts,jsx,tsx}",
		"./config/**/*.{js,ts,jsx,tsx}",
		"./types/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-orange": "var(--primary-orange)",
				"primary-grey": "var(--primary-grey)",
				"primary-text": "var(--primary-text)",
				"border-grey": "var(--border-grey)",
				"secondary-black": "var(--secondary-black)",
				"primary-black": "var(--primary-black)",
				"primary-dark": "var(--primary-dark)",
				"secondary-dark": "var(--secondary-dark)",

				"blue-rgb": "var(--blue-rgb)",
				"green-rgb": "var(--green-rgb)",

				gray: {
					200: "#D5DAE1"
				},
				black: {
					DEFAULT: "#000",
					500: "#1D2235"
				},
				blue: {
					500: "#2b77e7"
				}
			},
			animation: {
				'spin-slow': 'spin 20s linear infinite',
			},
			height: {
				screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
			},
			minHeight: {
				screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
			},
			screens: {
				'8xl': '1350px',
				'lg.5': '1152px'
			},
			maxWidth: {
				'8xl': '1350px'
			},
			boxShadow: {
				card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
			}
		},
	},
	plugins: [],
}