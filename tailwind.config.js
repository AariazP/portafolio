/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          dim: 'var(--color-accent-dim)',
          light: 'var(--color-accent-light)',
        },
        muted: 'var(--color-muted)',
        'muted-light': 'var(--color-muted-light)',
        default: 'var(--color-text)',
      },
      boxShadow: {
        'glow': '0 0 30px var(--color-accent-dim), 0 0 60px var(--color-accent-light)',
        'card': '0 8px 32px var(--color-shadow)',
        'card-hover': '0 12px 48px var(--color-shadow), 0 0 0 1px var(--color-accent)',
        'btn-glow': '0 4px 20px var(--color-shadow-btn)',
        'image': '0 20px 60px var(--color-shadow-dark)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        pulseGlow: { '0%, 100%': { boxShadow: '0 0 20px var(--color-accent-dim)' }, '50%': { boxShadow: '0 0 40px var(--color-shadow-btn)' } },
      },
    },
  },
  plugins: [],
}
