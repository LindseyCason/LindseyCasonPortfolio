/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'velvet-espresso':  '#1A1613',
        'parchment':        '#F4EFEA',
        'roasted-charcoal': '#231E1A',
        'cashmere':         '#AFA095',
        'brass':            '#C4A484',
        'espresso-border':  '#2C2520',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
