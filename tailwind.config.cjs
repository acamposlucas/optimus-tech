/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#8E2424",
        "red-100": "#C3191908",
        "gray-100": "#D0D5DD",
        "gray-200": "#EAECF0",
        "gray-400": "#98A2B3",
        "gray-500": "#667085",
        "gray-900": "#101828",
      },
      fontFamily: {
        ...fontFamily,
        'sans': ['Inter', 'sans-serif'],
      },
      screens: {
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px',
      }
    },
  },
  plugins: [],
}
