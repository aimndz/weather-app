/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      lineHeight: {
        15: "7rem",
      },
      backgroundImage: {
        clearSky: "url('../src/images/clear-sky.jpg')",
        cloudy: "url('../src/images/cloudy.png')",
        partlyCloud: "url('../src/images/partly-cloud.png')",
        rainy: "url('../src/images/rainy.png')",
        thunderstorm: "url('../src/images/thunderstorm.png')",
        snowy: "url('../src/images/snowy.png')",
      },
    },
  },
  plugins: [],
};
