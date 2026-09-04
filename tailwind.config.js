/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        gamer: {
          dark: '#0a0e17',
          surface: '#121a2c',
          border: '#1f2d48',
          accent: '#ff0055',
          neon: '#00f0ff',
          purple: '#8a2be2',
        }
      },
      boxShadow: {
        'glow-primary': '0 0 25px -5px rgba(139, 92, 246, 0.45)',
        'glow-accent': '0 0 25px -5px rgba(244, 63, 94, 0.45)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.45)',
      }
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#8b5cf6",
          "secondary": "#06b6d4",
          "accent": "#f43f5e",
          "neutral": "#1e293b",
          "base-100": "#111827",
          "base-200": "#0a0e17",
          "base-300": "#1f293d",
          "base-content": "#f3f4f6",
          "info": "#38bdf8",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
        light: {
          "primary": "#7c3aed",
          "secondary": "#0284c7",
          "accent": "#e11d48",
          "neutral": "#334155",
          "base-100": "#ffffff",
          "base-200": "#f1f5f9",
          "base-300": "#e2e8f0",
          "base-content": "#0f172a",
          "info": "#0284c7",
          "success": "#16a34a",
          "warning": "#d97706",
          "error": "#dc2626",
        }
      }
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
