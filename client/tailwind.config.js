/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#100f0d",
        darkGrey: "#545454",
        lightGrey: "#d9d9d9",
        green: "#83a2ab",
        red: "#f45f50",
        crimson: "#F25252",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
