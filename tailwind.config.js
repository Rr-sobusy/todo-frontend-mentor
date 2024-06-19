/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
         background : "rgb(var(--background))",
         foreground : "rgb(var(--foreground))",
         backgroundAccent: "rgb(var(--background-accent))",
         primary : "rgb(var(--primary))",
         border : "rgb(var(--border))"
      }
    },
  },
  plugins: [],
}