import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { primary: "#0ea5e9", accent: "#10b981" } } },
  plugins: [],
};
export default config;
