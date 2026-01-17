/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./context/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./App.tsx"
    ],
    theme: {
        extend: {
            colors: {
                // New Operational System (Semantic)
                ops: {
                    bg: 'var(--bg-main)',
                    panel: 'var(--bg-panel)',
                    surface: 'var(--bg-surface)',
                    border: 'var(--border-main)',
                    'border-bolder': 'var(--border-bolder)',
                    text: {
                        primary: 'var(--text-primary)',
                        secondary: 'var(--text-secondary)',
                        tertiary: 'var(--text-tertiary)',
                    },
                    action: {
                        DEFAULT: 'var(--action-primary)',
                        hover: 'var(--action-hover)',
                    }
                },
                signal: {
                    success: 'var(--signal-success)',
                    warning: 'var(--signal-warning)',
                    critical: 'var(--signal-critical)',
                    info: 'var(--signal-info)',
                },
                // Light Mode Specifics (Technical Paper)
                tech: {
                    paper: '#F8F9FA',
                    ink: '#0F172A',
                },

                // Backward Compatibility Layer (Keep distinct for now)
                brand: {
                    bg: 'var(--bg-main)',
                    surface: 'var(--bg-panel)',
                    border: 'var(--border-main)',
                    'text-primary': 'var(--text-primary)',
                    'text-secondary': 'var(--text-secondary)',
                    chaos: 'var(--signal-critical)',
                    clarity: 'var(--signal-success)',
                    accent: 'var(--signal-info)',
                    cta: 'var(--signal-success)',
                    process: 'var(--text-tertiary)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                // Legacy Aliases
                poppins: ['Inter', 'sans-serif'],      // Poppins is removed, mapping to Inter
                'roboto-mono': ['JetBrains Mono', 'monospace'], // Mapping old mono to new mono
            },
            keyframes: {
                'holographic-reveal': {
                    '0%': { opacity: '0', clipPath: 'inset(10% 0 10% 0)', transform: 'scale(0.99)' },
                    '100%': { opacity: '1', clipPath: 'inset(0 0 0 0)', transform: 'scale(1)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'micro-flash': {
                    '0%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                    '100%': { opacity: '1' },
                },
                'smooth-bounce': {
                    '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
                    '50%': { transform: 'translateY(-10px)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
                },
                'slide-in-left': {
                    '0%': { opacity: '0', transform: 'translateX(-40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'slide-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 5px rgba(3, 105, 161, 0.3)' },
                    '50%': { boxShadow: '0 0 20px rgba(3, 105, 161, 0.6)' },
                },
                'scale-in': {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                'floating': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            animation: {
                'reveal-in': 'holographic-reveal 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'fade-in-up': 'fade-in-up 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'pulse-cta': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'flash': 'micro-flash 0.1s ease-out',
                'smooth-bounce': 'smooth-bounce 1.2s infinite',
                'slide-in-left': 'slide-in-left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'scale-in': 'scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                'floating': 'floating 3s ease-in-out infinite',
            }
        }
    },
    plugins: [],
}
