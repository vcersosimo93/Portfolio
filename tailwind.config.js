/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px', // Dispositivos pequeños, como móviles
      'md': '768px', // Dispositivos medianos, como tablets
      'lg': '1024px', // Dispositivos grandes, como laptops
      'xl': '1280px', // Dispositivos extra grandes, como pantallas de escritorio
    }
  },
  plugins: [],
}