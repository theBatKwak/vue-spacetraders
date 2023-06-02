/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(16 185 129)'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        20: 'repeat(20, minmax(0, 1fr))'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
