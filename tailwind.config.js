/** @type {import('tailwindcss').Config} */
export default {
  content: 
  [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    extend: 
    {
      colors: {
        teagreen: '#DBEFBC',
        pastelgreen: '#E2FADB',
        forestgreen: '#567568',
        blueblack: '#272838',
        coolgray: '#989FCE',
        labgreen: '#37FF8B'
      }
    },
  },
  plugins: [],
}

