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
    },
  },
  plugins: [],
}

export default config
