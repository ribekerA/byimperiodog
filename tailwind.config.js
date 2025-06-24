/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "pet-blue": "#003c4f",
        "pet-gold": "#d4af7f",
        "pet-light": "#f5f5f5",
        "pet-dark": "#333333"
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        inter: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
