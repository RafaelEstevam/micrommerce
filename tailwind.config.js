/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'white': '#ffffff',
    //   'blue': {
    //     100: "#fc0",
    //     200: "#c00",
    //     300: "#f60",
    //     400: "#fc0",
    //     500: "#000",
    //     600: "#0f0",
    //     700: "#f00",
    //     800: "#00f",
    //     900: "#fa7",
    //   },
    //   'slate': {
    //     100: '#cffafe',
    //     200: '#a5f3fc',
    //     300: '#67e8f9',
    //     400: '#22d3ee',
    //     500: '#06b6d4',
    //     600: '#0891b2',
    //     700: '#0e7490',
    //     800: '#155e75',
    //     900: '#164e63',
    //   },
    //   'yellow': {
    //     100: '#fc0',
    //     200: '#fc0',
    //     300: '#fc0',
    //     400: '#fc0',
    //     500: '#fc0',
    //     600: '#fa0',
    //     700: '#fa0',
    //     800: '#fa0',
    //     900: '#fa0',
    //   }
    // },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Arial', 'serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
