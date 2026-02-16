/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        purple: 'rgb(var(--color-purple) / <alpha-value>)',
        orange: 'rgb(var(--color-orange) / <alpha-value>)',
        pink: 'rgb(var(--color-pink) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        gray: 'rgb(var(--color-gray) / <alpha-value>)',
        light: 'rgb(var(--color-light) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Responsive typography
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 56px
        'h1': ['2rem', { lineHeight: '1.2' }], // 32px mobile -> 56px desktop
        'h2': ['1.5rem', { lineHeight: '1.3' }], // 24px mobile -> 36px desktop
        'h3': ['1.25rem', { lineHeight: '1.4' }], // 20px mobile -> 24px desktop
      },
      screens: {
        'xs': '320px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'colorful': '0 10px 40px -15px rgba(255, 107, 107, 0.3)',
        'colorful-lg': '0 20px 60px -15px rgba(255, 107, 107, 0.4)',
      },
    },
  },
  plugins: [],
}
