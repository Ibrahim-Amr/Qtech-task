/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				blue: {
					main: '#000060',
				},
				orange: {
					main: '#e36c09',
				},
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: { fontSize: theme('fontSize.h1'), fontWeight: theme('fontWeight.bolder') },
				h2: { fontSize: theme('fontSize.h2') },
				h3: { fontSize: theme('fontSize.h3') },
			});
		}),
		require('@tailwindcss/forms'),
	],
};
