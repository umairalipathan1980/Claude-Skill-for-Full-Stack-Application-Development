import animatePlugin from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif']
      },
      backgroundImage: {
        'grid-radial': 'radial-gradient(circle at 20% 20%, rgba(15, 23, 42, 0.08) 0, transparent 45%)'
      },
      boxShadow: {
        glow: '0 0 35px rgba(16, 185, 129, 0.25)'
      }
    }
  },
  plugins: [animatePlugin]
}
