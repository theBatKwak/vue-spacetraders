/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(16 185 129)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
