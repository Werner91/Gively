/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif']
      },
      colors: {
        primary: '#FF6B6B',
        secondary: '#FFE5CC',
        tertiary: '#CCF2FF',
        'text-base': '#6C7A89'
      }
    },
  },
  plugins: [],
};