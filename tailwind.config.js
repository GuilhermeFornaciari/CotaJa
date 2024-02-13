/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#008F8C',
        primaryDarker: '#023535',
        primaryLighter: '#0FC2C0'
      }
    },
  },
  plugins: [],
}
