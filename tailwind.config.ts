import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'olympus-gold': '#D4A657',
        'olympus-gold-light': '#E5C078',
        'olympus-gold-dark': '#B8903C',
        'olympus-black': '#000000',
        'olympus-white': '#FFFFFF',
      },
      fontFamily: {
        'display': ['Bebas Neue', 'sans-serif'],
        'heading': ['Oswald', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
