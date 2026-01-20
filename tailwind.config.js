/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max1300': { max: '1300px' },
        'max1250': { max: '1250px' },
        'max1000': { max: '1000px' },
        'max930': { max: '930px' },
        'max820': { max: '820px' },
        'max600': { max: '600px' },
      }
    },
  },
  plugins: [],
}

