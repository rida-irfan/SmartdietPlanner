/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Modern AI health platform colors
        'primary': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'navy': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'accent': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Legacy colors for backward compatibility
        'leaf': {
          50: '#F8FFF4',
          100: '#F0FEE8',
          200: '#D4F5C4',
          300: '#A5D66F',
          400: '#8BC84B',
          500: '#7CB342',
          600: '#689F38',
          700: '#558B2F',
          800: '#33691E',
        },
        'health': {
          50: '#FFFBF0',
          100: '#FFF3E0',
          200: '#FFE0B2',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FBC02D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(132, 204, 22, 0.08)',
        'glow': '0 0 40px rgba(132, 204, 22, 0.15)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'premium': '0 20px 50px rgba(132, 204, 22, 0.12)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'glass-hover': '0 8px 32px rgba(31, 38, 135, 0.47)',
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
      },
      backdropBlur: {
        'lg': '12px',
        'xl': '16px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #84cc16 0%, #22c55e 100%)',
        'gradient-accent': 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'gradient-wellness': 'linear-gradient(135deg, #F8FFF4 0%, #FFFBF0 100%)',
        'gradient-leaf': 'linear-gradient(135deg, #7CB342 0%, #A5D66F 100%)',
        'gradient-leaf-subtle': 'linear-gradient(135deg, rgba(124, 179, 66, 0.1) 0%, rgba(165, 214, 111, 0.1) 100%)',
        'gradient-health': 'linear-gradient(135deg, #FFE0B2 0%, #FFF3E0 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(124, 179, 66, 0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 30px rgba(124, 179, 66, 0.6)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
