const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1280px',
    },
    container: {
      center: true,
    },
    extend: {
      gridTemplateColumns: {
        '6t': 'repeat(6, minmax(60px, 60px))',
      },
    },
  },
  plugins: [

    plugin(function ({ addComponents }) {
      addComponents({
        '.btn-mobileRadio': {
          minWidth: '60px',
          height: '60px',
          boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
          borderRadius: '11px',
          border: '0.5px solid #E5E5E5',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: '600'
        },
        '.btn-mobileInterface': {
          margin: '0 15px 0 0',
        },
        '.image__Btn': {
          width: '60px',
        }
      })
    })

  ],
}
