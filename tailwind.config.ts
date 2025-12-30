// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-stax": "linear-gradient(45deg, #06b6d4, #22c55e, #84cc16)",
        "gradient-stax-2": "linear-gradient(45deg, #22c55e, #84cc16, #06b6d4)",
        "gradient-stax-3": "linear-gradient(45deg, #22c55e, #84cc16)",
        "gradient-bitrix": "linear-gradient(45deg, #00629A, #31C2F6, #FFFFFF)",
        "gradient-bitrix-2": "linear-gradient(45deg, #00629A, #31C2F6)",
      },
      colors: {
        "meu-verde": {
          300: "#DCF907",
          500: "#0BD83F",
        },
        "meu-azul": {
          300: "#06EFDD",
          600: "#37567B",
          700: "#26364A",
          800: "#151E29",
        },
      },
    },
  },
  plugins: [],
};

export default config;
