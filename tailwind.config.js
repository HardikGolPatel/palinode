/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  corePlugins: {
    container: false,
  },
  theme: { 
    screens: {
      sm: '576px',

      md: '768px',

      lg: '992px',

      xl: '1200px',

      xl13: '1300px',

      xxl: '1400px',

      // 'max-1199': { 'max': '1199px' },
      // 'sm': {'max': '767px'},
    },
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"],
      'work-sans': ["Work Sans", "sans-serif"]
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, #F2F4F7 100%);',
      'blue-gradient': 'linear-gradient(103deg, #003E5B 14.43%, #0083C1 100.41%);',
    },
    colors: {
      'green': '#97BB45',
      'white': '#FFF',
      'lightwhite': 'rgba(255, 255, 255, 0.70)',
      'blue': '#173D5A',
      'transparent': 'transparent',
    },
    boxShadow: {
      'button': '0px 0px 30px 7px rgba(142, 84, 233, 0.20) inset',
      'custom-shadow': '0px 0px 30px 7px rgba(142, 84, 233, 0.20) inset',
    }, 
    animation: {
      'infinite-scroll': 'infinite-scroll 25s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    },
    animation: {
      'loop-scroll': 'loop-scroll 20s linear infinite',
    },
    keyframes: {
      'loop-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '15px',
          paddingRight: '15px',


          '@screen sm': {
            maxWidth: '550px',
          },
          '@screen md': {
            maxWidth: '750px',
          },
          '@screen lg': {
            maxWidth: '950px',
          },
          '@screen xl': {
            maxWidth: '1150px',
          },
          '@screen xl13': {
            maxWidth: '1230px',
          },
        },
      })
    },
  ],
}


