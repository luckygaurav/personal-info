/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#07090f',
        panel: '#10131d',
        electric: '#7c5cff',
        aqua: '#39e7d0',
      },
      boxShadow: {
        glow: '0 0 55px rgba(124, 92, 255, 0.22)',
      },
    },
  },
  plugins: [],
}
