/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#242424',
        secondary: '#4C88E3',
        tertiary: '#2D3142',
        lightgray: '#D9D9D9',
        darkgray: '#6B6B6B',
      },
      backgroundImage: {
        heroBg: './src/images/heroBg.png',
      },
    },
  },
  plugins: [],
};
