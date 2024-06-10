/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
         background : "#E4E5F1",
         backgroundAccent: "#FAFAFA",
         foreground : "#272727",
         foregroundAccent: "#25273C"
      }
    },
  },
  plugins: [],
}