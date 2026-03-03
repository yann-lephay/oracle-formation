import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
              "card": {
                      "DEFAULT": "var(--background)",
                      "foreground": "var(--foreground)"
              },
              "info": "var(--info)",
              "ring": "var(--primary)",
              "input": "var(--border)",
              "muted": {
                      "DEFAULT": "var(--muted)",
                      "foreground": "var(--muted-foreground)"
              },
              "accent": {
                      "DEFAULT": "var(--accent)",
                      "foreground": "var(--primary-foreground)"
              },
              "border": "var(--border)",
              "popover": {
                      "DEFAULT": "var(--background)",
                      "foreground": "var(--foreground)"
              },
              "primary": {
                      "DEFAULT": "var(--primary)",
                      "foreground": "var(--primary-foreground)"
              },
              "success": "var(--success)",
              "warning": "var(--warning)",
              "secondary": {
                      "DEFAULT": "var(--secondary)",
                      "foreground": "var(--foreground)"
              },
              "background": "var(--background)",
              "foreground": "var(--foreground)",
              "destructive": {
                      "DEFAULT": "var(--destructive)",
                      "foreground": "var(--primary-foreground)"
              }
      },
      fontFamily: {
              "mono": [
                      "Space Mono",
                      "monospace"
              ],
              "sans": [
                      "DM Sans",
                      "sans-serif"
              ],
              "heading": [
                      "Urbanist",
                      "sans-serif"
              ]
      },
      borderRadius: {
              "lg": "8px",
              "md": "6px",
              "sm": "4px"
      },
      boxShadow: {
              "DEFAULT": "0 4px 12px rgba(0, 0, 0, 0.04)"
      },
    },
  },
  plugins: [],
};

export default config;
