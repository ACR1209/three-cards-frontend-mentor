/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        brightOrange: "hsl(31, 77%, 52%)",
        darkCyan: {
          DEFAULT: "hsl(184, 100%, 22%)",
          very: "hsl(179, 100%, 13%)"
        },
        transparentWhite: "hsla(0, 0%, 100%, 0.75)",
        veryLightGray: "hsl(0, 0%, 95%)",
      }

    },
  },
  plugins: [],
}
