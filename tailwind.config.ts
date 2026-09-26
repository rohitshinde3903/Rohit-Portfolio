import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#070709',
        surface: '#0d0d12',
        'surface-elevated': '#14141b',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'border-focus': 'rgba(255, 255, 255, 0.2)',
        primary: '#f8fafc',
        secondary: '#94a3b8',
        muted: '#64748b',
        accent: {
          DEFAULT: '#8b5cf6',
          violet: '#7c3aed',
          cyan: '#06b6d4',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Syne', 'Space Grotesk', 'sans-serif'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero-clamp': 'clamp(3.5rem, 8vw, 9.5rem)',
        'heading-clamp': 'clamp(2.5rem, 6vw, 6.5rem)',
        'subheading-clamp': 'clamp(1.75rem, 3.5vw, 3.5rem)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;