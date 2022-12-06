/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {},
    colors: {
      primary: '#6334d4',
      primaryShade:'#4e25b0',
      secondary: '#f7f6fd',
      darker: '#433737',
      white:'#FFFFFF',
      active:'#C84545',
      grayFill: '#eeeeee',
      grayBorder: '#dddddd'
    }
  },
  plugins: [],
}
