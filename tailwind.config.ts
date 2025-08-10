import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'circular-web': ['circular-web', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        zentry: ['zentry', 'sans-serif'],
      },
      // TODO: fix colors are not working
      colors: {
        blue: {
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD',
        },
        violet: {
          300: '#5724FF',
        },
        yellow: {
          100: '#8E983F',
          300: '#EDFF66',
        },
      },
    },
  },
  plugins: [],
}

export default config
