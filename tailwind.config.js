/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "360px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1300px",
        "2xl": "1600px",
        "3xl": "2000px",
        "4xl": "2560px",
        "5xl": "3560px",
        "6xl": "4560px",
      },
    },
  },
  plugins: [],
}