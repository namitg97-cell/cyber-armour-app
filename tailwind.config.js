/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyberBlack: '#0a0a12',
        cyberDarkGray: '#151522',
        cyberPurple: '#7c3aed',
        cyberLightPurple: '#a78bfa',
      },
    },
  },
  plugins: [],
}