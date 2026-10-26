import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          cyan: "#0EA5E9",
          blue: "#3B82F6",
          darkNavy: "#0B1220",
          cardDark: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(6, 182, 212, 0.4)",
        "glow-lg": "0 0 45px -5px rgba(6, 182, 212, 0.5)",
        soft: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
        "soft-dark": "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        spinSlow: "spin 25s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(14px)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 20px 2px rgba(6, 182, 212, 0.45)",
          },
          "50%": {
            boxShadow: "0 0 38px 8px rgba(6, 182, 212, 0.75)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
