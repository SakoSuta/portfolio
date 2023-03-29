/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      extend: {},
      colors: {
        'MyColor': '#E69F34',
        'Categories': '#656D72',
      },
  },
  plugins: [],
}