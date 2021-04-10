const defaultTheme = require('tailwindcss/defaultConfig')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	// mode: "jit",
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.theme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
