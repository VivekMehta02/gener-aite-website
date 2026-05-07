import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        generaite: {
          ink: "#092432",
          navy: "#062c45",
          teal: "#006b72",
          cyan: "#23b7c4",
          wash: "#eef9fb",
          line: "#c8e8ee",
          rose: "#df346b"
        }
      },
      boxShadow: {
        panel: "0 22px 70px rgba(6, 44, 69, 0.12)",
        teal: "0 18px 36px rgba(0, 107, 114, 0.24)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Arial", "sans-serif"]
      },
      backgroundImage: {
        "grid-glow":
          "linear-gradient(rgba(0,107,114,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,107,114,.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
