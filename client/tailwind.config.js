const defaultTheme = require('tailwindcss/defaultConfig')
const colors = require('tailwindcss/colors')
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	mode: 'jit',
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.theme.fontFamily.sans],
			},
			colors: {
				gray: colors.gray,
				accent: '#fd4d4d',
				'accent-hover': '#fd6868',
				'accent-disabled': '#f5bfbf',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio')],
}
