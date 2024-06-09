/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
         background : "#F8F8F8",
         foreground : "#272727"
      }
    },
  },
  plugins: [],
}