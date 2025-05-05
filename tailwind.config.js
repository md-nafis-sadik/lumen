/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'mint-25': '#F1F9FE',  // Lightest (adjusted hue, very light blue)
        'mint-35': '#E1F1FD',
        'mint-50': '#BDE3FA',  // Lighter
        'mint-100': '#9AC7E6', // New (light)
        'mint-200': '#83CDF6', // Adjusted (from cyan to blue)
        'mint-300': '#2F8FC3', // Adjusted (darker blue)
        'mint-350': '#189ADF',
        'mint-375': '#167BB9',
        'mint-400': '#188ac7', // Base (unchanged)
        'mint-500': '#093A6B',  // New (darker)
        'mint-600': '#072B52',  // New
        'mint-700': '#051C38',  // New
        'mint-800': '#030E1F',  // New
        'mint-900': '#003150',   // Darkest (adjusted from teal to deep blue)
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

