/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        darkPrimary: '#1D1F21',
        darkSecondary: '',
        greenPrimary: '#B7F843'
      },
    },
  },
  plugins: [],
};
