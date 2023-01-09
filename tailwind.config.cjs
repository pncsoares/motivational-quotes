/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        // offset-x | offset-y | blur-radius | spread-radius | color
        '3xl': '0px -5px 15px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require('daisyui')],
};
