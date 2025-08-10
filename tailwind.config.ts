import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom gaming-themed colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        gaming: {
          dark: '#1a1a1a',
          darker: '#0f0f0f',
          accent: '#646cff',
          'accent-hover': '#535bf2',
        }
      },
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        gaming: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-gaming': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      boxShadow: {
        'gaming': '0 0 20px rgba(100, 108, 255, 0.3)',
        'gaming-hover': '0 0 30px rgba(100, 108, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-gaming': 'linear-gradient(135deg, #646cff 0%, #535bf2 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
      }
    },
  },
  plugins: [],
}

export default config
