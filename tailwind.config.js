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
		fontSize: {
			'2xl': '2.5rem',
			xl: '1.875rem',
			lg: '1.5rem',
			base: '1.25rem',
			sm: '1rem',
			xs: '0.875rem',
			h1: '2rem',
			h2: '1.5rem',
			h3: '1.3rem',
			h4: '1rem',
			h5: '0.8rem',
			h6: '0.7rem',
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
