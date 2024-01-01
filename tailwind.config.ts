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
      md: '768px'
    },
    colors: {
      white: '#ffffff',
      platinum: '#e5e5e5',
      vistaBlue: '#7aa2ea'
    },
    extend: {}
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')]
};
export default config;
