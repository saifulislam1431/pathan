/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#00BC9D",

          "secondary": "#009E9C",

          "accent": "#4FD894",

          "neutral": "#1c2127",

          "base-100": "#fcfcfd",

          "info": "#73cfe8",

          "success": "#4fd894",

          "warning": "#fac966",

          "error": "#ef627e",
        },
      },
      "night"
    ],
   
  },
  plugins: [require("daisyui")],
}

