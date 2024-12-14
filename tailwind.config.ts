import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tangerine: ['Tangerine', 'cursive'], // Add Tangerine font
      },
      screens: {
        sm: '640px', // Small screens start at 640px
        md: '768px', // Medium screens start at 768px
        lg: '1024px', // Large screens start at 1024px
        xl: '1280px', // Extra large screens
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '5rem',
        md: '1rem',
        lg: '2rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
