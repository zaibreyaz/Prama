/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#010b14",
        primaryText: "#f5e8c7",
        secondaryText: "#818fb4",
        accent: "#3F3B6C",
        highlight:"#301E67"
      }
    },
  },
  plugins: [],
}