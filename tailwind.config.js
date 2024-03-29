/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    extend: {
      spacing: {
        1: "1px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
