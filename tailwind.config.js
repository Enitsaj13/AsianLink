/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#FF6347",
        tertiary: "#FFD700",
        font: "#1F2937",
        gray: "#6b7280",
        white: "#ffffff",
        darkGray: "#475569",
      },
    },
  },
  plugins: [],
}
