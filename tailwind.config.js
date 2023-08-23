/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { screens: {
      'sm': '300px',
      'md': '800px',
      'lg': '950px',
      'xl': '1280px',
    },},
  },
  plugins: [],
}