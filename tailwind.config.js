/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'edu-nsw': ['"Edu NSW ACT Cursive"', 'cursive'],
      },
    },
  },
  plugins: [],
}