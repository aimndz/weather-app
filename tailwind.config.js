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
        clearSky: "url(images/clear-sky.jpg)",
        cloudy: "url(images/cloudy.png)",
        partlyCloud: "url(images/partly-cloud.png)",
        rainy: "url(images/rainy.png)",
        thunderstorm: "url(images/thunderstorm.png)",
        snowy: "url(images/snowy.png)",
      },
    },
  },
  plugins: [],
};
