
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
        // Palette africaine étendue
        african: {
          terracotta: "#cd6133",
          ochre: "#cc8400",
          baobab: "#8b4513",
          sahara: "#f4a460",
          sunset: "#ff6b35",
          earth: "#8b4000",
          gold: "#ffd700",
          copper: "#b87333",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        african: ['Playfair Display', 'serif'], // Police pour les titres africains
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
        // Nouvelles animations africaines
        "african-dance": {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "25%": { transform: "rotate(1deg) scale(1.02)" },
          "75%": { transform: "rotate(-1deg) scale(0.98)" },
        },
        "tribal-pulse": {
          "0%, 100%": { 
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(234, 88, 12, 0.4)"
          },
          "50%": { 
            transform: "scale(1.05)",
            boxShadow: "0 0 0 10px rgba(234, 88, 12, 0)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideIn: "slideIn 0.5s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "african-dance": "african-dance 3s ease-in-out infinite",
        "tribal-pulse": "tribal-pulse 2s infinite",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(234, 88, 12, 0.08)",
        card: "0 8px 30px rgba(234, 88, 12, 0.12)",
        intense: "0 10px 40px rgba(234, 88, 12, 0.15)",
        african: "0 8px 32px rgba(205, 97, 51, 0.15)",
      },
      backgroundImage: {
        'african-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ea580c' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'tribal-dots': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cd6133' fill-opacity='0.15'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
