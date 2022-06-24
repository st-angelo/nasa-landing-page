/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'horizon-100': 'rgba(188,199,220)',
        'horizon-500': 'rgba(90,144,247)',
        'bordeaux-700': 'rgba(34,37,45)',
        'deepspace-600': 'rgba(28,28,28)',
      },
    },
  },
  plugins: [],
};
