/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      colors: {
        forest: {
          50: '#f1f8f4',
          100: '#def0e6',
          200: '#bee0cd',
          300: '#91caaa',
          400: '#5eac83',
          500: '#3c9164',
          600: '#2b734e',
          700: '#235c3f',
          800: '#1e4a34',
          850: '#173d2a',
          900: '#143826',
          950: '#0b2116',
        },
        gold: {
          DEFAULT: '#ffaa00',
          hover: '#f09a00',
          light: '#ffbe33',
          muted: '#ffe6a8',
          soft: 'rgba(255, 170, 0, 0.12)',
        },
        accent: {
          DEFAULT: '#ffaa00',
          hover: '#f09a00',
          light: '#ffbe33',
          dark: '#e69500',
          soft: 'rgba(255, 170, 0, 0.12)',
          muted: 'rgba(255, 170, 0, 0.08)',
        },
        surface: {
          DEFAULT: '#ffffff',
          elevated: '#f9fafb',
          muted: '#f3f4f6',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 2px 10px 0 rgba(0, 0, 0, 0.04), 0 1px 3px 0 rgba(0, 0, 0, 0.02)',
        'card-hover': '0 20px 35px -10px rgba(20, 56, 38, 0.12), 0 2px 8px -2px rgba(0,0,0,0.04)',
        'card-dark': '0 2px 10px 0 rgba(0, 0, 0, 0.25)',
        'card-hover-dark': '0 20px 35px -10px rgba(0, 0, 0, 0.5)',
        'gold-glow': '0 0 30px -5px rgba(255, 170, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'spin-slow': 'spin 14s linear infinite',
        'marquee': 'marquee 28s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
