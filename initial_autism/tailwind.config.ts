import { type Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      scale: {
        '98': '0.98',
        '102': '1.02',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF6B6B", // Playful coral red
          foreground: "#FFFFFF",
          hover: "#FF8787",
        },
        secondary: {
          DEFAULT: "#4ECDC4", // Cheerful teal
          foreground: "#FFFFFF",
          hover: "#6ED8D1",
        },
        accent: {
          DEFAULT: "#FFD93D", // Sunny yellow
          foreground: "#000000",
          hover: "#FFE066",
        },
        destructive: {
          DEFAULT: "#FF8787",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F8F9FA",
          foreground: "#6C757D",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
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
        "bounce-slight": {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-slight": "bounce-slight 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
