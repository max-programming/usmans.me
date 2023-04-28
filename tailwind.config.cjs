/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Sen', 'sans-serif'],
    },
    container: {
      center: true,
      padding: 10,
    },
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
  plugins: [require('flowbite/plugin')],
};
