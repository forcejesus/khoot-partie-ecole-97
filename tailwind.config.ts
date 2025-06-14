
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#ea580c", // Orange africain
          light: "#fb923c",
          dark: "#c2410c",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#fef3f2", // Terre africaine claire
          foreground: "#1f2937",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#fef3f2",
          foreground: "#6b7280",
        },
        accent: {
          DEFAULT: "#fff7ed",
          foreground: "#0f172a",
        },
        success: {
          DEFAULT: "#059669", // Vert forêt africaine
          foreground: "#ffffff",
        },
        warning: {
          DEFAULT: "#d97706", // Ocre africain
          foreground: "#ffffff",
        },
        info: {
          DEFAULT: "#0ea5e9",
          foreground: "#ffffff",
        },
        // Palette africaine étendue et enrichie
        african: {
          terracotta: "#cd6133",
          ochre: "#cc8400",
          baobab: "#8b4513",
          sahara: "#f4a460",
          sunset: "#ff6b35",
          earth: "#8b4000",
          gold: "#ffd700",
          copper: "#b87333",
          kente: "#e74c3c",
          mud: "#8b7355",
          savanna: "#daa520",
          tribal: "#cd853f",
          // Nouvelles couleurs africaines
          ebony: "#2c1810",
          ivory: "#fffff0",
          leopard: "#ffbf00",
          zebra: "#36454f",
          acacia: "#c19a6b",
          mahogany: "#c04000",
          calabash: "#d2691e",
          palm: "#228b22",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Amiri', 'Playfair Display', 'Georgia', 'serif'],
        african: ['Scheherazade New', 'Amiri', 'serif'], // Police principale africaine
        arabic: ['Amiri', 'serif'], // Police arabe/africaine
        cairo: ['Cairo', 'sans-serif'], // Police moderne africaine
        markazi: ['Markazi Text', 'serif'], // Police persane/africaine
        // Nouvelles polices modernes
        inter: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Tailles conformes aux normes d'accessibilité WCAG et Material Design
        'xs': ['0.75rem', { lineHeight: '1rem' }],     // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],    // 16px - Taille de base recommandée
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
        '5xl': ['3rem', { lineHeight: '1' }],          // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],       // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],        // 72px
        '8xl': ['6rem', { lineHeight: '1' }],          // 96px
        '9xl': ['8rem', { lineHeight: '1' }],          // 128px
        // Tailles spécifiques mobiles (conformes aux normes iOS/Android)
        'mobile-xs': ['0.75rem', { lineHeight: '1.125rem' }], // 12px avec line-height optimisé mobile
        'mobile-sm': ['0.875rem', { lineHeight: '1.375rem' }], // 14px
        'mobile-base': ['1rem', { lineHeight: '1.625rem' }],   // 16px - Taille minimum recommandée pour mobile
        'mobile-lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'mobile-xl': ['1.25rem', { lineHeight: '1.875rem' }], // 20px
        'mobile-2xl': ['1.5rem', { lineHeight: '2.125rem' }], // 24px
        // Tailles pour tablette
        'tablet-base': ['1.0625rem', { lineHeight: '1.625rem' }], // 17px - Optimal pour tablette
        'tablet-lg': ['1.1875rem', { lineHeight: '1.8125rem' }], // 19px
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
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "kente-wave": {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
        },
        "african-dance": {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "25%": { transform: "rotate(3deg) scale(1.05)" },
          "75%": { transform: "rotate(-3deg) scale(0.95)" },
        },
        "tribal-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideIn: "slideIn 0.5s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "kente-wave": "kente-wave 3s ease-in-out infinite",
        "african-dance": "african-dance 2s ease-in-out infinite",
        "tribal-pulse": "tribal-pulse 2s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(234, 88, 12, 0.08)",
        card: "0 8px 30px rgba(234, 88, 12, 0.12)",
        intense: "0 10px 40px rgba(234, 88, 12, 0.15)",
        african: "0 8px 32px rgba(205, 97, 51, 0.15)",
        tribal: "0 12px 48px rgba(139, 69, 19, 0.2)",
        kente: "0 6px 24px rgba(231, 76, 60, 0.25)",
      },
      backgroundImage: {
        'african-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ea580c' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'tribal-dots': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cd6133' fill-opacity='0.15'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        'kente-stripes': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='kente' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Crect x='0' y='0' width='10' height='10' fill='%23ea580c'/%3E%3Crect x='10' y='10' width='10' height='10' fill='%23ffd700'/%3E%3Crect x='0' y='10' width='10' height='10' fill='%23dc2626'/%3E%3Crect x='10' y='0' width='10' height='10' fill='%23059669'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23kente)' opacity='0.1'/%3E%3C/svg%3E\")",
      },
      clipPath: {
        'african-mask': 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
        'kente-diamond': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        'tribal-arrow': 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)',
        'baobab-tree': 'polygon(45% 0%, 55% 0%, 70% 40%, 85% 80%, 100% 100%, 0% 100%, 15% 80%, 30% 40%)',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Breakpoints spécifiques pour les tailles de police
        'text-sm': '640px',
        'text-md': '768px',
        'text-lg': '1024px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
