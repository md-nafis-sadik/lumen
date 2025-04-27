/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'mint-400': '#1293AB',
        'mint-900': '#0A3F49',
        'mint-300': '#06ACCE',
        'mint-200': '#9BDEEB',
        'mint-50': '#EAF9FC',
        'mint-25': '#F5FCFD',
        'white-00': '#ffffff',
        'primary-text': '#141414',
        'fade-text': '#BDBDBD',
        'fade-bg': '#EDEDED',
        'fade-white': '#F6F6F6',
        'extra-fade-white': '#FAFAFA'
      },
      fontSize: {
        'h1': '56px',
        'tiny': '1.0625rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeInModal: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        }
      },
      animation: {
        fadeInModal: 'fadeInModal 0.3s ease-out',
      }
    }
  },
  plugins: [],
}

