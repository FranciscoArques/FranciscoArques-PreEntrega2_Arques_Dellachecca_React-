/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-coffee' : '#6F4E37',
        'dark-coffee' : '#2B0F0E',
      },
      backgroundColor: {
        'dark-coffee' : '#2B0F0E',
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
