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
        'highlight' : 'var(--highlight-text)',
        'secondary' : 'var(--secondary-text)',
        'neon' : 'var(--primary-neon)'
      },
      boxShadow: {
        'neon': '0 0 8px 1px var(--primary-neon-shadow), inset 0 0 8px 1px var(--primary-neon-shadow)',
        'neon-lg': '0 0 15px 5px var(--primary-neon-shadow), inset 0 0 4px 1px var(--primary-neon-shadow)',
        'neon-alter': '0 0 12px 1px var(--primary-neon-shadow)',
        'neon-glass': '0 0 2px 1px var(--primary-neon-glass), inset 0 0 2px 1px var(--primary-neon-glass)'
      },
      borderColor: {
        'neon': 'var(--primary-neon)',
        'neon-glass': 'var(--primary-neon-glass)',
        'secondary-neon': 'var(--secondary-neon)',
        'secondary': 'var(--secondary-bg-glass);',
      },
      backgroundColor: {
        'neon': 'var(--primary-neon);',
        'primary': 'var(--primary-bg);',
        'primary-glass': 'var(--primary-bg-glass)',
        'secondary': 'var(--secondary-bg);',
        'secondary-glass': 'var(--secondary-bg-glass)',
        'fade': 'var(--fade)'
      },
      gridTemplateColumns : {
        '4-70' : 'repeat(4, 70px);'
      },
      fill : {
        'neon': 'var(--primary-neon);',
        'secondary': 'var(--secondary-text);',
        'primary': 'var(--primary-text);'
      },
    },
  },
  plugins: [],
} satisfies Config;
