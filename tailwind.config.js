/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        darkPrimary: "#1C2021",
        darkSecondary: "#313131",
        greenPrimary: "#B7F843",
      },
    },
  },
  plugins: [],
};
