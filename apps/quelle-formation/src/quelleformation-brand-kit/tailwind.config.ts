import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: "{ primary: 'var(--primary)', primary-foreground: 'var(--primary-foreground)', secondary: 'var(--secondary)', accent: 'var(--accent)', background: 'var(--background)', foreground: 'var(--foreground)', surface: 'var(--surface)', muted: 'var(--muted)', muted-foreground: 'var(--muted-foreground)', border: 'var(--border)', destructive: 'var(--destructive)', success: 'var(--success)', warning: 'var(--warning)', info: 'var(--info)' }",
      fontFamily: "{ heading: ['Urbanist', 'sans-serif'], body: ['DM Sans', 'sans-serif'], mono: ['Source Code Pro', 'monospace'] }",
      borderRadius: "{ none: '0px', sm: '2px', DEFAULT: '6px', md: '8px', lg: '12px', xl: '16px', full: '9999px' }",
      boxShadow: "{ DEFAULT: '0px 2px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.02)', md: '0px 4px 8px rgba(0, 0, 0, 0.06), 0px 8px 16px rgba(0, 0, 0, 0.04)', lg: '0px 8px 16px rgba(0, 0, 0, 0.08), 0px 16px 32px rgba(0, 0, 0, 0.06)', none: 'none' }",
    },
  },
  plugins: [],
};

export default config;
