/** @type {import('tailwindcss').Config} */
module.exports = {
  // ./public is root directory
  // ** is whatever folder inside
  // *.{html,js} is whatever file inside when extension are html or js
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}