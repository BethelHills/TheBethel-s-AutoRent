/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E8590C',
          dark: '#C44A08',
          light: '#FF7A3D',
        },
        accent: {
          DEFAULT: '#1A1A2E',
          light: '#2D2D4E',
        },
        background: '#F7F6F3',
        foreground: '#0D0D0D',
        muted: {
          DEFAULT: '#6B7280',
          light: '#F3F4F0',
        },
        border: '#E5E5E0',
        card: '#FFFFFF',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Manrope', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3.5rem, 9vw, 9rem)',
        'display': 'clamp(2.5rem, 5vw, 5rem)',
        'heading': 'clamp(1.75rem, 3vw, 3rem)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
        '5xl': '4rem',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.12)',
        'primary': '0 8px 25px rgba(232, 89, 12, 0.35)',
        'float': '0 25px 50px -12px rgba(0,0,0,0.25)',
        premium:
          '0 2px 48px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.04)',
      },
      animation: {
        'fade-slide-up': 'fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeSlideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      fontWeight: {
        '700': '700',
        '800': '800',
      },
    },
  },
  plugins: [],
};
