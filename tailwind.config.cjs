/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      'red': {
        DEFAULT: '#c61e37', // 700
        '50': '#fef2f2',
        '100': '#fee5e5',
        '200': '#fbd0d1',
        '300': '#f8a9ab',
        '400': '#f3797e',
        '500': '#ea4955',
        '600': '#d6283d',
        '700': '#c61e37', // default
        '800': '#971a30',
        '900': '#82192f',
        '950': '#480915',
      },
      'purple': {
        DEFAULT: "#2b2668", // 900
        '50': '#f1f2fd',
        '100': '#e0e3f9',
        '200': '#c8cdf5',
        '300': '#a2adee',
        '400': '#7581e5',
        '500': '#555bdc',
        '600': '#4340d0',
        '700': '#4137be',
        '800': '#3c329b',
        '900': '#2b2668', //default
        '950': '#231f4c',
      },
    },
    fontFamily:{
      'sui': ['"Sui Generis"', 'sans-serif'],
    },
    fontSize: {
      base: ["1rem", "1rem"],
      "title": ["8rem", "8rem"],
      "h1": ["3rem", "3rem"],
      "h2": ["2rem", "2rem"],
    },
    height: {
      1: "1rem",
      "nav": "4rem",
      screen: "100vh",
      full: "100%",
    },
    spacing: {
      0: "0",
      0.25: "0.25rem",
      0.5: "0.5rem",
      0.75: "0.75rem",
      1: "1rem",
      2: "2rem",
      3: "3rem",
      "nav": "4rem",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
