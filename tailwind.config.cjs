/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        growDown: {
          '0%': {
            transform: 'scaleY(0)',
          },
          '80%': {
            transform: 'scaleY(1.1)',
          },
          '100%': {
            transform: 'scaleY(1)',
          },
        },
      },
      animation: {
        growDown: 'growDown 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
