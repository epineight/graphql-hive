const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./{pages,src}/**/*.ts{,x}'],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fcfcfc',
      black: '#0b0d11',
      emerald: colors.emerald,
      red: {
        50: '#fef5f5',
        100: '#fdeaeb',
        200: '#fbcbce',
        300: '#f8abb0',
        400: '#f26d74',
        500: '#ed2e39',
        600: '#d52933',
        700: '#b2232b',
        800: '#8e1c22',
        900: '#74171c',
      },
      yellow: {
        50: '#fffcf2',
        100: '#fffae6',
        200: '#fff2bf',
        300: '#ffeb99',
        400: '#ffdb4d',
        500: '#fc0',
        600: '#e6b800',
        700: '#bf9900',
        800: '#997a00',
        900: '#7d6400',
      },
      green: {
        50: '#f2fcf9',
        100: '#e6f8f3',
        200: '#bfeee1',
        300: '#99e3cf',
        400: '#4dcfac',
        500: '#00ba88',
        600: '#00a77a',
        700: '#008c66',
        800: '#007052',
        900: '#005b43',
      },
      cyan: '#0acccc',
      purple: '#5f2eea',
      blue: colors.indigo,
      gray: {
        100: '#f2f2f4',
        200: '#dfe0e2',
        300: '#cccdd1',
        400: '#a5a7af',
        500: '#7f818c',
        600: '#72747e',
        700: '#5f6169',
        800: '#24272e', // '#4c4d54',
        900: '#202329',
      },
      magenta: '#f11197',
      orange: {
        50: '#fefbf5',
        100: '#fef8ec',
        200: '#fcedcf',
        300: '#fbe2b3',
        400: '#f7cd79',
        500: '#f4b740',
        600: '#dca53a',
        700: '#b78930',
        800: '#926e26',
        900: '#785a1f',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      ringColor: theme => ({
        DEFAULT: theme('colors.orange.500/75'),
        ...theme('colors'),
      }),
      keyframes: {
        // Dropdown menu
        'scale-in': {
          '0%': { opacity: 0, transform: 'scale(0)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        // Tooltip
        'slide-up-fade': {
          '0%': { opacity: 0, transform: 'translateY(2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-right-fade': {
          '0%': { opacity: 0, transform: 'translateX(-2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-down-fade': {
          '0%': { opacity: 0, transform: 'translateY(-2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-left-fade': {
          '0%': { opacity: 0, transform: 'translateX(2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        // Navigation menu
        'enter-from-right': {
          '0%': { transform: 'translateX(200px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'enter-from-left': {
          '0%': { transform: 'translateX(-200px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'exit-to-right': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(200px)', opacity: 0 },
        },
        'exit-to-left': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-200px)', opacity: 0 },
        },
        'scale-in-content': {
          '0%': { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
          '100%': { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
        },
        'scale-out-content': {
          '0%': { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
          '100%': { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        // Toast
        'toast-hide': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'toast-slide-in-right': {
          '0%': { transform: 'translateX(calc(100% + 1rem))' },
          '100%': { transform: 'translateX(0)' },
        },
        'toast-slide-in-bottom': {
          '0%': { transform: 'translateY(calc(100% + 1rem))' },
          '100%': { transform: 'translateY(0)' },
        },
        'toast-swipe-out-x': {
          '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          '100%': { transform: 'translateX(calc(100% + 1rem))' },
        },
        'toast-swipe-out-y': {
          '0%': { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
          '100%': { transform: 'translateY(calc(100% + 1rem))' },
        },
      },
      animation: {
        // Dropdown menu
        'scale-in': 'scale-in 0.2s ease-in-out',
        'slide-down': 'slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade': 'slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade': 'slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        // Navigation menu
        'enter-from-right': 'enter-from-right 0.25s ease',
        'enter-from-left': 'enter-from-left 0.25s ease',
        'exit-to-right': 'exit-to-right 0.25s ease',
        'exit-to-left': 'exit-to-left 0.25s ease',
        'scale-in-content': 'scale-in-content 0.2s ease',
        'scale-out-content': 'scale-out-content 0.2s ease',
        'fade-in': 'fade-in 0.2s ease',
        'fade-out': 'fade-out 0.2s ease',
        // Toast
        'toast-hide': 'toast-hide 100ms ease-in forwards',
        'toast-slide-in-right': 'toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-slide-in-bottom': 'toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-swipe-out-x': 'toast-swipe-out-x 100ms ease-out forwards',
        'toast-swipe-out-y': 'toast-swipe-out-y 100ms ease-out forwards',
      },
    },
  },
  plugins: [
    // Utilities for visually truncating text after a fixed number of lines
    require('@tailwindcss/line-clamp'),
    // Utilities and variants for styling Radix state
    require('tailwindcss-radix')(),
  ],
};
