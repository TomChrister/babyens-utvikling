/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FBF6EE',
        sand: '#F3E9DA',
        ink: '#33302B',
        muted: '#7A726A',
        terracotta: '#C9764F',
        'terracotta-soft': '#E0A485',
        sage: '#869B7E',
        'sage-soft': '#B7C4AC',
        // utviklingsområder
        social: '#D98695',
        sprak: '#D7A24B',
        kognitivt: '#869B7E',
        motorikk: '#7D9BB0',
      },
      boxShadow: {
        soft: '0 12px 40px -18px rgba(80, 60, 40, 0.35)',
        card: '0 2px 16px -8px rgba(80, 60, 40, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.4s ease both',
      },
    },
  },
  plugins: [],
}
