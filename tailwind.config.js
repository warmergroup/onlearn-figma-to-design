/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-teal': '#0B7077',
        'primary-orange': '#FD661F',
        'light-teal': '#E0F7FA',
        'dark-teal': '#0B7077',
        'text-dark': '#2C3E50',
        'text-light': '#6C757D',
      },
      fontFamily: {
        'sans': ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        'pico': ['PicoBlackAl', 'Inter', 'system-ui', 'sans-serif'],
        'raleway': ['Raleway', 'system-ui', 'sans-serif'],
        'clash': ['Clash Display', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'nav': ['18px', '100%'],
      },
      letterSpacing: {
        'nav': '0.02em',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
