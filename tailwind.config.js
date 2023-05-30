import DarkMode from './src/components/DarkMode';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        "principal-font" : ["Lato", "sans-serif"]      }
    },
  },
  plugins: [],
}

