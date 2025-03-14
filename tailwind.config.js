/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4c669f',
        secondary: '#3b5998',
        dark: '#192f6a',
      },
    },
  },
  plugins: [],
} 