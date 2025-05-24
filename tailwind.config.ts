import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        naruto: {
          orange: "#FF8C00",
          darkblue: "#0A1D3E",
        },
        ml: {
          blue: "#3A7DFF",
          gold: "#FFD700",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

