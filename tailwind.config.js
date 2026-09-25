/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        studio: {
          950: '#0f0e0c',
          900: '#191816',
          850: '#22201d',
          800: '#2e2b27',
          700: '#47433d',
          600: '#6e685f',
          500: '#948d82',
          400: '#b8b1a5',
          300: '#d9d3c7',
          200: '#e8e4d9',
          100: '#f4f1ea',
          50: '#faf8f4',
        },
        clay: {
          600: '#a34220',
          500: '#c85a32',
          400: '#d9734e',
          300: '#e89172',
        },
        bronze: {
          600: '#85613c',
          500: '#a67c52',
          400: '#c29b70',
        },
        sand: {
          50: '#fcfbfa',
          100: '#f5f2eb',
          200: '#e9e4d8',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        ultra: '0.25em',
        mega: '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
