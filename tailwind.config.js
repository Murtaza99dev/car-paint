/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'red' : '#c11003'
      },
      width:{
        '762px' : '762px'
      },
      height:{
        '1177px' : '1177px'
      },
      fontFamily:{
        "zeyada": ['Zeyada', 'cursive']

      }
    },
  },
  plugins: [],
}
