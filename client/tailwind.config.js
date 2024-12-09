/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'dark-blue':'#2E3C7E',
      'rose':'#FBEAEB',
      'red':'#b91c1c',
      'light-blue':'#3076b2',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
};
