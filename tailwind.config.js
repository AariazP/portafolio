/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    borderColor: {
      DEFAULT: 'var(--color-border)',
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          dim: 'var(--color-accent-dim)',
        },
        muted: 'var(--color-muted)',
        'muted-light': 'var(--color-muted-light)',
        default: 'var(--color-text)',
      },
      boxShadow: {
        'accent-sm': '0 4px 20px var(--color-shadow)',
        'accent-md': '0 8px 25px var(--color-shadow)',
        'accent-lg': '0 10px 30px var(--color-shadow)',
        'image': '0 20px 60px var(--color-shadow-dark)',
        'btn': '0 8px 25px var(--color-shadow-btn)',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
