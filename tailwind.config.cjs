/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#564D80',
        'primary-darker': '#271533',
        'primary-light': '#D3FCD5',
        separator: '#98A6D4',
        card: {
          // bg: '#1a0429',
          bg: '#160b1f',
        },
      },
    },
  },
  plugins: [],
};
