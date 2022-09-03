/** @type {import('tailwindcss').Config} */

const disabledCss = {
	'code::before': false,
	'code::after': false,
	'blockquote p:first-of-type::before': false,
	'blockquote p:last-of-type::after': false,
	pre: false,
	code: false,
	'pre code': false,
	'code::before': false,
	'code::after': false,
}

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nav': 'aktiv-grotesk, sans-serif',
      'QwitcherGrypen': 'Qwitcher Grypen, cursive',
      'MrsSheppards': 'Mrs Sheppards, cursive ',
      'MrDafoe': 'Mr Dafoe, cursive',
      'JosefinSans': 'Josefin Sans, sans-serif',
      'Satisfy': 'Satisfy, cursive' ,
    },
    extend: {
      typography: {
				DEFAULT: { css: disabledCss },
				sm: { css: disabledCss },
				lg: { css: disabledCss },
				xl: { css: disabledCss },
				'2xl': { css: disabledCss },
			},
      
    },
    screens: {
      '3xl': {'max': '1900px'},
      '3xlmin': {'min': '1900px'},

      'max1600': {'max': '1600px'},
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'xlmin': {'min': '1280px'},
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      'lgmin': {'min': '1022px'},
      // => @media (max-width: 1023px) { ... }
      '2md':{'max': '963px'},
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      'smmin': { 'min': '639px' },

      // => @media (max-width: 639px) { ... }

      'mobile': {'max': '425px'},
      // => @media (max-width: 420px) { ... }
      'pad': { 'min': '426px', 'max': '1278px' },
      'padmax': { 'max': '1278px' },
      'padmin': {'min': '1278px'},
      
      
      // => @media (min-width: 421px and max-width: 1024px) { ... }
      'pc': { 'min': '1279px', 'max': '2559px' },
      
      'spc': {'min': '1800px', 'max': '2600px'},
      // => @media (min-width: 421px and max-width: 1024px) { ... }
      '4k': {'min': '2560px'},
      // => @media (min-width: 421px and max-width: 1024px) { ... }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}