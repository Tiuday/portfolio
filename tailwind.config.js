/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          900: '#2E1065',
        },
      },
      fontFamily: {
        cossette: ['CossetteTexte', 'serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
        pixelbody: ['"VT323"', 'monospace'],
      },
    },
  },
  plugins: [],
}
