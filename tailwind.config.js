/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF5F0',
        primary: '#D4AF37',
        secondary: '#8A6F4D',
        accent: '#E6E1DC',
        text: '#1E1E1E',
        light: '#FFFFFF',
          gold: '#d4af37',
        pink: '#d63384',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
