/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6C3AFF',
        accent: '#00D1FF',
        dark: '#0A0A1A',
        'dark-surface': '#12122A',
        'dark-border': '#1E1E3A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
