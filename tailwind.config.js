/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        'beige': '#F5F5DC',
        'antiquewhite': '#FAEBD7'

      }
    },
  },
  plugins: [],
}

