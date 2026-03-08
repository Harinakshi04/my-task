import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing1: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        typing2: {
          "0%": { width: "0%", opacity: "1" },
          "100%": { width: "100%", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        typing1: "typing1 2s steps(15) forwards",
        typing2: "typing2 2s steps(14) forwards 2s",
        slideUp: "slideUp 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;