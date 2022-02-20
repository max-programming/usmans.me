/** @type import('tailwindcss/tailwind-config').TailwindConfig */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        body: '#17171f',
        'selected-text': '#a3a3ff',
        theme: '#3f3fff',
        nav: '#404053',
        secondary: '#9191A4',
        badge: '#3f3f51',
        'input-border': '#565666',
        input: '#2a2a35',
      },
      fontFamily: {
        poppins: ["'Poppins'", 'sans-serif'],
      },
    },
  },
};
