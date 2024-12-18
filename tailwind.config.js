/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        copperplate: ["Copperplate Gothic", "sans-serif"],
        neue: ["Neue Montreal", "sans-serif"],
      },
    },
  },
  plugins: [],
}
