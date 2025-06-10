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
      'primary': '#ED1519',
      'secondary': '#FFF100',
      'text':{
        'high': '#262626',
        'medium': '#737373',
        'low': '#D1D1D1',
        'disabled': '#E7E7E7',
      },
      'background':{
        'white': '#FFFFFF',
        'grey': '#F6F6F6',
      },
      'success': {
        'dark': '#165136',
        'medium': '#1A9F60',
        'light': '#F0FDF6',
      },
      'warning': {
        'dark': '#74520F',
        'medium': '#D1B300',
        'light': '#FCFFE7',
      },
      'danger': {
        'dark': '#881416',
        'medium': '#ED1519',
        'light': '#FFF1F1',
      },
      'info': {
        'dark': '#154B64',
        'medium': '#068BB4',
        'light': '#ECFDFF',
      },
      'red': {
        DEFAULT: '#ED1519', // R600
        '50': '#FFF1F1',
        '100': '#FFDFE0',
        '200': '#FFC5C6',
        '300': '#FF9D9F',
        '400': '#FF6467',
        '500': '#FF1F23',
        '600': '#ED1519', // default
        '700': '#C80D10',
        '800': '#A50F12',
        '900': '#881416',
        '950': '#4B0405',
      },
      'yellow': {
        DEFAULT: "#FFF100", // Y500
        '50': '#FCFFE7',
        '100': '#F7FFC1',
        '200': '#F4FF86',
        '300': '#F6FF41',
        '400': '#FFFF0D',
        '500': '#FFF100', // default
        '600': '#D1B300',
        '700': '#A68202',
        '800': '#89650A',
        '900': '#74520F',
        '950': '#442C04',
      },
      'neutral': {
        '50': '#F6F6F6',
        '100': '#E7E7E7',
        '200': '#D1D1D1',
        '300': '#B0B0B0',
        '400': '#888888',
        '500': '#737373',
        '600': '#5D5D5D',
        '700': '#4F4F4F',
        '800': '#454545',
        '900': '#3D3D3D',
        '950': '#262626',
      },
      'green': {
        '50': '#F0FDF6',
        '100': '#DDFBEC',
        '200': '#BDF5DA',
        '300': '#89ECBD',
        '400': '#4EDA97',
        '500': '#27C077',
        '600': '#1A9F60',
        '700': '#1A8754',
        '800': '#186341',
        '900': '#165136',
        '950': '#062D1C',
      },
      'blue': {
        '50': '#ECFDFF',
        '100': '#CEF9FF',
        '200': '#A4F1FD',
        '300': '#65E4FB',
        '400': '#11CAF0',
        '500': '#03B0D7',
        '600': '#068BB4',
        '700': '#0C7092',
        '800': '#145B76',
        '900': '#154B64',
        '950': '#073145',
      },
    },
    fontFamily:{
      'bebas': ['"Bebas Neue"', 'sans-serif'],
    },
    fontSize: {
      "display-xl": ["3.75rem","5.625rem"],
      "display-lg": ["2.25rem","3.375rem"],
      "display-md": ["1.875rem","2.8125rem"],
      "display-sm": ["1.25rem","1.875rem"],
      "display-xs": ["1rem","1.5rem"],
      "h1": ["2.5rem","3.75rem"],
      "h2": ["2rem","3rem"],
      "h3": ["1.5rem","2.25rem"],
      "lg": ["1.25rem","1.875rem"],
      "md": ["1rem","1.5rem"],
      "sm": ["0.75rem","1.125rem"],
      "label-mini": ["0.75rem","1.125rem"],
      "label-micro": ["0.6875rem","1.03125rem"],
      "label-nano": ["0.625rem","0.9375rem"],
      "label-caption": ["0.5rem","0.75rem"],

    },
    height: {
      1: "1rem",
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
    },
    extend: {
      maxWidth : {
        'container': '1000px',
      },
    },
  },
  variants: {},
  plugins: [],
}
