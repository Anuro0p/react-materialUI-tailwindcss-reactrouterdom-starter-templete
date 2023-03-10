/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    screens: {
      xs: '300px',
      sm: '600px',
      md: '900px',
      lmd: '1050px',
      slg: '1125px',
      lg: '1200px',
      xl: '1536px',
      print: { raw: 'print' },
    },
    extend: {},
  },
  plugins: [],
};
