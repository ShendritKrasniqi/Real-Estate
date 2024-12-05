/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'dark-blue':'#2E3C7E',
      'rose':'#FBEAEB',
      'light-blue':'#a1abdd',
      'red':'#b91c1c',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
};
