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
        primary: '#34D399',
        error: '#F87171',
        'backgroundColor': '#083645',
        'input-color': '#224957',
        'card-color': '#111827',
      },
    },
  },
  plugins: [],
};
export default config;
