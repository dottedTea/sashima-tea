/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
        wave: 'spin 8s linear infinite',
      },
      colors: {
        brown: '#a09b65',
        green: '#4b7121',
      },
      width: {
        container: '1280px',
      },
      zIndex: {
        menu: 100,
        header: 50,
        base: 0,
        background: -1,
      },
    },
  },
  plugins: [],
}

