/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F5132',   // deep palm-leaf green
        accent:  '#198754',   // lighter accent
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};