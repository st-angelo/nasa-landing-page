/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        lg: '1200px',
        xl: '1560px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'horizon-100': 'rgb(188,199,220)',
        'horizon-500': 'rgb(90,144,247)',
        'horizon-700': 'rgb(57,122,245)',
        'bordeaux-600': 'rgb(52,57,69)',
        'bordeaux-700': 'rgb(34,37,45)',
        'deepspace-50': 'rgb(125,125,125)',
        'deepspace-100': 'rgb(100,100,100)',
        'deepspace-200': 'rgb(88,88,88)',
        'deepspace-300': 'rgb(62,62,62)',
        'deepspace-400': 'rgb(44,44,44)',
        'deepspace-500': 'rgb(33,33,33)',
        'deepspace-600': 'rgb(28,28,28)',
        'deepspace-700': 'rgb(23,23,23)',
      },
    },
  },
  plugins: [],
};
