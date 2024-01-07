import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      container: '900px'
    },
    colors: {
      white: '#ffffff',
      chineseBlack: '#13171c',
      platinum: '#e5e5e5',
      lightAzure: '#6ab3fc',
      cadetBlue: '#b0b8c4',
      onyx: '#3a3a41'
    },
    extend: {}
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')]
};
export default config;
