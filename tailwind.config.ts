import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2a3a',
          dark: '#111e2a',
          light: '#243647',
        },
        orange: {
          DEFAULT: '#EB6E2C',
        },
        cream: {
          DEFAULT: '#F4F2E6',
        },
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        source: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
