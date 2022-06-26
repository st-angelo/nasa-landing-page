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
        'deepspace-500': 'rgb(33,33,33)',
        'deepspace-600': 'rgb(28,28,28)',
        'deepspace-700': 'rgb(23,23,23)',
      },
    },
  },
  plugins: [],
};
