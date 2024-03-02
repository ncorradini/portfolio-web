import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      container: '850px'
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      chineseBlack: '#212429',
      platinum: '#e5e5e5',
      cafeAuLait: '#a18057',
      desertSand: '#e0caab',
      cadetBlue: '#b0b8c4',
      onyx: '#3a3a41',
      silverSand: '#c2c2c2',
      blackOlive: '#3d3d3d',
      darkSilver: '#707070'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)']
      }
    }
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')]
};
export default config;
