import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "4xl": "1920px",
        "3xl": "1720px",
        "2xl": "1320px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "560px",
        "2xs": "440px",
        "3xs": "360px",
      },
      maxWidth: {
        "desktop-xl": "1920px",
        "desktop-lg": "1720px",
        "desktop-md": "1536px",
        "desktop-sm": "1280px",
        laptop: "1024px",
        "tablet-lg": "768px",
        "tablet-sm": "640px",
        "mobile-lg": "560px",
        "mobile-md": "440px",
        "mobile-sm": "360px",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          blue: "#2B54E2",
          white: "#EEF2FE",
          gray: "#ececec",
        },
        white: {
          500: "#FFFFFF",
          600: "#E6EAFB",
          700: "#E4E9FB",
        },
        black: {
          500: "#000000",
        },
        blue: {
          500: "#10253E",
          600: "#1940C4",
          700: "#0A14FF",
          levander: "#A7ADE7",
        },
        gray: {
          500: "#F3F4F8",
          700: "#89909E",
          800: "#6A7383",
          border: "#DDE2F1",
          light: "#959CA7",
          dark: "#424551",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        select: "hsl(var(--select))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
} satisfies Config;
