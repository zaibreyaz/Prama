/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#010b14",
        primaryText: "#FFE7CC",
        secondaryText: "#FFE9D0",
        accent: "#3F3B6C",
        highlight: "#301E67",
      },
      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"], // normal text
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"], // secondary heading
        montserrat: ["Montserrat", "sans-serif"], // primary heading
        ubuntu: ["Ubuntu", "sans-serif"], // buttons
      },
    },
  },
  plugins: [],
};
