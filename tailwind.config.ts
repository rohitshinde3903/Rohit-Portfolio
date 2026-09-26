// tailwind.config.ts
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
        "error": "#ba1a1a",
        "inverse-on-surface": "#f4f0ef",
        "outline": "#7e7570",
        "on-primary-container": "#95918f",
        "surface-container-low": "#f7f3f2",
        "surface-container-high": "#ebe7e6",
        "primary-container": "#2c2a29",
        "on-tertiary-container": "#9d9085",
        "on-primary-fixed-variant": "#494645",
        "inverse-primary": "#cac5c4",
        "surface-container": "#f1edec",
        "outline-variant": "#cfc4be",
        "surface-container-highest": "#e6e2e1",
        "on-primary": "#ffffff",
        "surface-tint": "#615e5c",
        "primary": "#171615",
        "tertiary-fixed-dim": "#d3c4b8",
        "on-tertiary-fixed": "#221a13",
        "surface-bright": "#fdf8f7",
        "primary-fixed-dim": "#cac5c4",
        "tertiary-container": "#322921",
        "inverse-surface": "#313030",
        "background": "#fdf8f7",
        "on-primary-fixed": "#1d1b1a",
        "on-tertiary-fixed-variant": "#4f453c",
        "on-secondary-fixed-variant": "#4d453f",
        "secondary-fixed": "#ede0d7",
        "surface-dim": "#ddd9d8",
        "surface-container-lowest": "#ffffff",
        "on-secondary-container": "#6a615a",
        "on-secondary-fixed": "#201a15",
        "surface-variant": "#e6e2e1",
        "on-tertiary": "#ffffff",
        "on-background": "#1c1b1b",
        "on-surface": "#1c1b1b",
        "secondary": "#665d55",
        "on-surface-variant": "#4d4541",
        "error-container": "#ffdad6",
        "tertiary-fixed": "#f0e0d3",
        "tertiary": "#1c150e",
        "surface": "#fdf8f7",
        "on-error": "#ffffff",
        "secondary-fixed-dim": "#d0c4bb",
        "on-secondary": "#ffffff",
        "on-error-container": "#93000a",
        "secondary-container": "#eaddd4",
        "primary-fixed": "#e7e1df"
      },
      fontFamily: {
        headline: ["var(--font-headline)", "Newsreader", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "Fira Code", "monospace"]
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "1rem",
        full: "9999px"
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'spin-slow': 'spin 60s linear infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;