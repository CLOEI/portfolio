/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background : "#16161a",
        text : "#fffffe",
        paragraph : "#94a1b2",
        card: "#242629",
        secondary: "#242629"
      }
    },
  },
  plugins: [],
}
