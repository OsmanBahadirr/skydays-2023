/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-1deg)' },
					'50%': { transform: 'rotate(1deg)' },
				},
				subtleScale: {
					'0%, 100%': { transform: 'scale(1.0)' },
					'50%': { transform: 'scale(1.025)' },
				},
			},
			animation: {
				subtleScale: 'subtleScale 1s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
