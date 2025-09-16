/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* white with opacity */
        input: "var(--color-input)", /* gray-700 */
        ring: "var(--color-ring)", /* lime-400 */
        background: "var(--color-background)", /* gray-800 */
        foreground: "var(--color-foreground)", /* gray-50 */
        surface: {
          DEFAULT: "var(--color-surface)", /* gray-700 */
          foreground: "var(--color-surface-foreground)", /* gray-50 */
        },
        primary: {
          DEFAULT: "var(--color-primary)", /* lime-400 */
          foreground: "var(--color-primary-foreground)", /* gray-800 */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* emerald-500 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-500 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-900 */
          foreground: "var(--color-muted-foreground)", /* gray-300 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* blue-500 */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* gray-700 */
          foreground: "var(--color-popover-foreground)", /* gray-50 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* gray-700 */
          foreground: "var(--color-card-foreground)", /* gray-50 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* emerald-500 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-500 */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        glass: {
          background: "var(--color-glass-background)", /* gray-700 with opacity */
          border: "var(--color-glass-border)", /* lime-400 with opacity */
        },
        text: {
          primary: "var(--color-text-primary)", /* gray-50 */
          secondary: "var(--color-text-secondary)", /* gray-300 */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px var(--color-primary), 0 0 10px var(--color-primary), 0 0 15px var(--color-primary)",
            opacity: "1"
          },
          "50%": { 
            boxShadow: "0 0 10px var(--color-primary), 0 0 20px var(--color-primary), 0 0 30px var(--color-primary)",
            opacity: "0.8"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'elevation': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        'elevation-lg': '0 8px 25px -5px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(220, 252, 23, 0.3)',
        'glow-lg': '0 0 40px rgba(220, 252, 23, 0.4)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}