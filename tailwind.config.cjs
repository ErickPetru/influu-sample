// Doc: https://tailwindcss.com/docs/configuration
module.exports = {
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },

    fontFamily: {
      'base': ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif'],
      'alternate': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },

    fontSize: {
      '5xs': '.25em',
      '4xs': '.375em',
      '3xs': '.5em',
      '2xs': '.675em',
      'xs': '.75em',
      '2sm': '.8125em',
      'sm': '.875em',
      'tight': '.9375em',
      'base': '1em',
      'lg': '1.125em',
      'xl': '1.25em',
      '2xl': '1.5em',
      '3xl': '1.875em',
      '4xl': '2.25em',
      '5xl': '3em',
      '6xl': '3.5em',
      '7xl': '4em',
      '8xl': '4.5em',
      '9xl': '5em',
      '10xl': '6em'
    },

    inset: {
      '-6px': '-6px',
      '0': '0'
    },

    boxShadow: {
      'default': '0px -4px 10px rgba(0, 0, 0, 0.1)',
      'lg': '0px 4px 15px rgba(0, 0, 0, 0.25)',
      'xl': '0px 10px 40px rgba(0, 0, 0, 0.15)'
    },

    container: {
      center: true,
      padding: {
        'default': '1rem',
        'md': '2rem'
      }
    },

    extend: {
      spacing: {
        '36': '9rem',
        '44': '11rem',
        '68': '17rem',
        '72': '18rem',
        '76': '19rem',
        '80': '20rem',
        '84': '21rem',
        '96': '24rem',
      },

      colors: {
        white: {
          'default': 'var(--color-white-default)',
          '90': 'var(--color-white-90)',
          '75': 'var(--color-white-75)',
          '70': 'var(--color-white-70)',
          '60': 'var(--color-white-60)',
          '50': 'var(--color-white-50)',
          '40': 'var(--color-white-40)',
          '30': 'var(--color-white-30)',
          '25': 'var(--color-white-25)',
          '10': 'var(--color-white-10)'
        },

        gray: {
          '100': 'var(--color-gray-100)',
          '200': 'var(--color-gray-200)',
          '300': 'var(--color-gray-300)',
          '400': 'var(--color-gray-400)',
          '500': 'var(--color-gray-500)',
          '600': 'var(--color-gray-600)',
          '700': 'var(--color-gray-700)',
          '800': 'var(--color-gray-800)',
          '900': 'var(--color-gray-900)'
        },

        purple: {
          '100': 'var(--color-purple-100)',
          '200': 'var(--color-purple-200)',
          '300': 'var(--color-purple-300)',
          '400': 'var(--color-purple-400)',
          '500': 'var(--color-purple-500)',
          '600': 'var(--color-purple-600)',
          '700': 'var(--color-purple-700)',
          '800': 'var(--color-purple-800)',
          '900': 'var(--color-purple-900)'
        },

        pink: {
          '100': 'var(--color-pink-100)',
          '200': 'var(--color-pink-200)',
          '300': 'var(--color-pink-300)',
          '400': 'var(--color-pink-400)',
          '500': 'var(--color-pink-500)',
          '600': 'var(--color-pink-600)',
          '700': 'var(--color-pink-700)',
          '800': 'var(--color-pink-800)',
          '900': 'var(--color-pink-900)'
        }
      }
    }
  }
}
