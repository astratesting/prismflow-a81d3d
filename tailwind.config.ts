import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: { DEFAULT: '#1a1a2e', light: '#252544', dark: '#12121f' },
        ivory: { DEFAULT: '#faf8f5', light: '#ffffff', dark: '#e8e4dc' },
        gold: { DEFAULT: '#c9a96e', light: '#d4ba8a', dark: '#b8944f' },
        burgundy: { DEFAULT: '#722f37', light: '#8e3a44', dark: '#562329' },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'ledger-lines': 'repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(201,169,110,0.06) 31px, rgba(201,169,110,0.06) 32px)',
      },
    },
  },
  plugins: [],
};

export default config;
