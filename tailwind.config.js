/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "zwilt-white": "#ffffff",
        "zwilt-purple": {
          100: "#EDEFFF",
          600: "#525AA0",
        },
        "zwilt-yellow": {
          100: "#FFF7E1",
          500: "#FFBE2E",
        },
        "zwilt-gray": {
          100: "#F3F3F3",
        },
        "zwilt-text": {
          100: "#202229",
        },
      },
    },
  },
  plugins: [],
};
