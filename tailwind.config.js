/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006BFF", //mid
        secondary: "#F4F8FF", //light
        terinary: "#004EBA", //darker
        quad: "#0B3558", //darkest
      },
    },
  },
  plugins: [],
};
