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
        bg: '#050505',
        'bg-elevated': '#0a0a0a',
        'bg-card': '#0e0e0e',
        'bg-hover': '#141414',
        'border-dim': 'rgba(255,255,255,0.06)',
        'border-lite': 'rgba(255,255,255,0.12)',
        'border-accent': 'rgba(139,92,246,0.3)',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
        'text-muted': '#64748b',
        'text-dim': '#475569',
        accent: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dark: '#7c3aed',
          glow: 'rgba(139,92,246,0.15)',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          glow: 'rgba(6,182,212,0.12)',
        },
        emerald: {
          DEFAULT: '#10b981',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'pulse-soft': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;