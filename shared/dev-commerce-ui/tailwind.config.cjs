/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 32,
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',

      base: {
        title: '#272221',
        subtitle: '#403937',
        text: '#574F4D',
        label: '#8D8686',
        hover: '#D7D5D5',
        button: '#E6E5E5',
        input: '#EDEDED',
        card: '#F3F2F2',
      },

      purple: {
        50: '#EBE5F9',
        400: '#8047F8',
        700: '#4B2995',
      },

      yellow: {
        50: '#F1E9C9',
        400: '#DBAC2C',
        700: '#C47F17',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        baloo: ['"Baloo 2"'],
      },
    },
  },
  plugins: [],
};
