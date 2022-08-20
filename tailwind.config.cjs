/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: 'Poppins, sans-serif',
			},
			colors: {
				primary: '#00040f',
				secondary: '#00f6ff',
				dimWhite: '#E1D9D1',
				dimBlue: '#09977c',
			},
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
};
