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
        'DarkMode': '#1D2939',
        'BackD':'#353E4B',
        'Light':'#E2E2E2',
        'Red':'#CC2828',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
  },
  plugins: [],
}