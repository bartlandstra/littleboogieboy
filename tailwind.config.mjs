/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C8901A',
        'gold-light': '#E8A830',
        'gold-dark': '#9A6E12',
        blues: '#1a3a5c',
        dark: '#0a0a0a',
        'dark-2': '#111111',
        'dark-3': '#1a1a1a',
        cream: '#e8e0d0',
        'cream-muted': '#a89880',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
