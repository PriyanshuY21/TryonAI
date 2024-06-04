/** @type {import('tailwindcss').Config} */
  module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#EDE9E5",
        secondary: "#FFFFFF",
        accent:"#FF5C00",
        text: "#000000",
        cloth:"#D9D9D9",
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [],
}