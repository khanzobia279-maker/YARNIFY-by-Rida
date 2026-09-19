/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fff3e9",
        surface: "#fff8f2",
        ink: "#402f26",
        muted: "#7f5f4f",
        primary: "#b4784d",
        accent: "#8f5a35",
        paper: "#f4efe8",
        clay: "#ba5e42",
        coral: "#d8795b",
        line: "#d8d0c7",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
