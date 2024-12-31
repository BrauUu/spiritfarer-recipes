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
        'neon': '0 8px 32px 0 var(--primary-neon);',
        'neon-sm': '0 0 16px 2px var(--primary-neon);',
        'neon-xsm"': '0 0 4px 1px var(--primary-neon);'
      },
      borderColor: {
        'neon': 'var(--primary-neon)',
        'secondary-neon': 'var(--secondary-neon)'
      },
      backgroundColor: {
        'neon': 'var(--primary-neon);',
        'primary': 'var(--primary-bg)'
      },
      gridTemplateColumns : {
        '4-100' : 'repeat(4, 100px);'
      },
      fill : {
        'neon': 'var(--primary-neon);',
        'secondary': 'var(--secondary-text);'
      }
    },
  },
  plugins: [],
} satisfies Config;
