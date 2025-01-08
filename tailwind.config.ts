import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'highlight' : 'var(--highlight-text)'
      },
      boxShadow: {
        'neon': '0 0 4px 1px var(--primary-neon-shadow), inset 0 0 4px 1px var(--primary-neon-shadow)',
        'neon-lg': '0 0 15px 5px var(--primary-neon-shadow), inset 0 0 4px 1px var(--primary-neon-shadow)',
        'neon-alter': '0 0 40px 5px var(--primary-neon-shadow)',
        'neon-glass': '0 0 2px 1px var(--primary-neon-glass), inset 0 0 2px 1px var(--primary-neon-glass)'
      },
      borderColor: {
        'neon': 'var(--primary-neon)',
        'neon-glass': 'var(--primary-neon-glass)',
        'secondary-neon': 'var(--secondary-neon)'
      },
      backgroundColor: {
        'neon': 'var(--primary-neon);',
        'primary': 'var(--primary-bg);',
        'secondary-glass': 'var(--secondary-bg-glass)'
      },
      gridTemplateColumns : {
        '4-70' : 'repeat(4, 70px);'
      },
      fill : {
        'neon': 'var(--primary-neon);',
        'secondary': 'var(--secondary-text);'
      }
    },
  },
  plugins: [],
} satisfies Config;
