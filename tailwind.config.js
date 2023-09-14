/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    fontFamily: {
      kumb: ['Kumbh Sans','sans-serif']
    },
    colors: {
      'palesky':'#69707D',
      'catskwhite': '#E4E9F2',
      'pumpkin': '#FF7E1B',
      'shark': '#1d2026'
    },
    extend: {},
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children","&>*")
    })
  ],
}

