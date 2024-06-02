/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "zwilt-white": "#ffffff",
        "zwilt-purple": {
          100: "#EDEFFF",
          200: "#8BA4FD",
          600: "#525AA0",
          900: "#202229",
        },
        "zwilt-yellow": {
          100: "#FFF7E1",
          500: "#FFBE2E",
        },
        "zwilt-gray": {
          100: "#F3F3F3",
          200: "#F2F2F2",
          300: "#F8F8F8",
        },
        "zwilt-text": {
          100: "#202229",
          200: "#1E1515",
        },
        "zwilt-title": {
          200: "#202229",
        },
      },
    },
  },
  plugins: [],
};
