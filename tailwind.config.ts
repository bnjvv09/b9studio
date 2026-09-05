import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#05070a",
          900: "#07090e",
          850: "#0a0d17",
          800: "#0f1422",
          700: "#161b2e",
          600: "#222944",
        },
        cyber: {
          purple: "#9333ea",
          "purple-light": "#a855f7",
          cyan: "#06b6d4",
          "cyan-light": "#22d3ee",
          pink: "#ec4899",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-glow": "radial-gradient(circle at 50% 0%, rgba(147, 51, 234, 0.15) 0%, rgba(6, 182, 212, 0.1) 40%, transparent 70%)",
      },
      boxShadow: {
        "glow-purple": "0 0 35px -5px rgba(147, 51, 234, 0.35)",
        "glow-cyan": "0 0 35px -5px rgba(6, 182, 212, 0.35)",
        "glow-mixed": "0 0 40px -5px rgba(147, 51, 234, 0.3), 0 0 30px -5px rgba(6, 182, 212, 0.25)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
