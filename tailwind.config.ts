import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#030407",
        electric: "#176BFF",
        cobalt: "#071D48",
        gold: "#D6B36A",
        ivory: "#F6F3ED",
      },
      fontFamily: {
        display: ["Bodoni 72", "Didot", "Iowan Old Style", "Baskerville", "Times New Roman", "serif"],
        sans: ["Avenir Next", "Avenir", "Montserrat", "Helvetica Neue", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 45px rgba(23, 107, 255, .28)",
        gold: "0 0 35px rgba(214, 179, 106, .14)",
      },
    },
  },
  plugins: [],
} satisfies Config;
