/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "zwilt-white": "#ffffff",
        "zwilt-purple": {
          100: "#EDEFFF",
          150: "#F2F4FF",
          200: "#8BA4FD",
          300: "#F8F8FF",
          400: "#50589F",
          600: "#525AA0",
          900: "#202229",
        },
        "zwilt-yellow": {
          100: "#FFF7E1",
          500: "#FFBE2E",
        },
        "zwilt-green": {
          100: "#C7F4C2",
        },
        "zwilt-gray": {
          100: "#F3F3F3",
          150: "#FDFDFF",
          200: "#F2F2F2",
          300: "#F8F8F8",
          400: "#D6D6D6",
        },
        "zwilt-text": {
          100: "#202229",
          200: "#1E1515",
        },
        "zwilt-title": {
          200: "#202229",
        },
        "zwilt-dark": {
          200: "#292B34",
          300: "#0C0C0C",
          400: "#202229",
        },
      },
      fontFamily: {
        switzerBold: ["Switzer-bold", "sans-serif"],
        switzerblack: ["Switzer-black", "sans-serif"],
        switzerMedium: ["Switzer-medium", "sans-serif"],
        switzerRegular: ["Switzer-regular", "sans-serif"],
        switzerRegular: ["Switzer-light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
