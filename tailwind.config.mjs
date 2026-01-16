/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary - Dark Mode Focused
        'bg-primary': '#0A0A0B',
        'bg-secondary': '#141416',
        'bg-tertiary': '#1C1C1F',
        
        // Accent Colors
        'accent-primary': '#CAFF33',
        'accent-secondary': '#FF6B35',
        'accent-tertiary': '#7B61FF',
        
        // Text
        'text-primary': '#FFFFFF',
        'text-secondary': '#A1A1AA',
        'text-muted': '#52525B',
        
        // Semantic
        'success': '#22C55E',
        'warning': '#F59E0B',
        'error': '#EF4444',
        'info': '#3B82F6',
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(4rem, 12vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '900' }],
        'h1': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'h2': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
      },
      borderRadius: {
        'brutal': '4px',
      },
      animation: {
        'counter': 'counter 2s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        counter: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(202, 255, 51, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(202, 255, 51, 0.6)' },
        },
      },
      transitionDuration: {
        '150': '150ms',
      },
    },
  },
  plugins: [],
};
