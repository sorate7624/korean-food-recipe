/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'korean-red': '#F85567',
        'korean-yellow': '#F2C25B',
        'korean-teal': '#0BA3AB',
        'korean-blue': '#333C7A',
      },
    },
  },
  plugins: [],
}

