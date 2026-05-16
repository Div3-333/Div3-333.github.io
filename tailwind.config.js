/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Deep Midnight
        foreground: '#f5f5f0', // Parchment
        accent: {
          gold: '#d4af37', // Champagne Gold
          brass: '#b5a642',
        },
        navy: '#0f172a',
        forest: '#064e3b',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
