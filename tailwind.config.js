/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F2F2F2",
        primary: "#F2DA91",
        secondary: "#BF8A49",
        tertiary: "#BFAB93",
        darkText: "#0D0D0D",
      },
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

