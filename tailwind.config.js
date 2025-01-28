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
      screens: {
        xs: "480px", // Extra small devices
        md: "908px",
        "3xl": "1600px", // Extra large devices
        "4k": "2560px", // 4K screens
      },
    },
  },
  plugins: [],
};
