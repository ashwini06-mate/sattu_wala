/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fffbe6',
          100: '#fff1b8',
          200: '#ffe58f',
          500: '#d97706',
          600: '#b45309',
          900: '#451a03',
        },
        rosatu: {
          gold: '#F59E0B',
          amber: '#D97706',
          dark: '#1C1917',
          deep: '#0F0D0E',
          card: 'rgba(255, 255, 255, 0.04)',
          emerald: '#059669',
          cacao: '#7C2D12',
          cardamom: '#047857',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['Syne', 'Outfit', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(35px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
