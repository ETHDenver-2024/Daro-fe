/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        default: 'url(assets/logo/cursor.png), default',
        pointer: 'url(assets/logo/cursor.png), logo',
      },
    },
  },
  plugins: [],
}

