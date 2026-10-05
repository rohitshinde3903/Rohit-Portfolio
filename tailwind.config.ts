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
        obsidian: '#08080A',
        surface: '#111115',
        muted: '#8E8E93',
        accent: '#3B82F6',
        electric: '#00F0FF',
        canvasLight: '#F5F5F7',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        serif: ['Syne', 'sans-serif'],
      },
      boxShadow: {
        brutalist: '8px 8px 0px 0px rgba(0,0,0,1)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-subtle': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'ticker': 'ticker 22s linear infinite',
        'subtle-float': 'floatIntro 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatIntro: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-8px) scale(1.01)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;