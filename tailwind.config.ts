import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'highlight': 'var(--highlight-text)',
        'secondary': 'var(--secondary-text)',
        'neon': 'var(--primary-neon)'
      },
      boxShadow: {
        'neon': '0 0 8px 1px var(--primary-neon-shadow), inset 0 0 8px 1px var(--primary-neon-shadow)',
        'neon-lg': '0 0 15px 5px var(--primary-neon-shadow), inset 0 0 4px 1px var(--primary-neon-shadow)',
        'neon-alter': '0 0 12px 2px var(--primary-neon-shadow)',
        'neon-glass': '0 0 2px 1px var(--primary-neon-glass), inset 0 0 2px 1px var(--primary-neon-glass)'
      },
      dropShadow: {
        'neon': '0 0 8px var(--primary-neon-shadow)',
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
      gridTemplateColumns: {
        'auto-max-70': 'repeat(4, minmax(0, 80px));'
      },
      fill: {
        'neon': 'var(--primary-neon);',
        'secondary': 'var(--secondary-text);',
        'primary': 'var(--primary-text);'
      },
      textShadow: {
        'neon': '0 0 2px var(--primary-neon-shadow)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
} satisfies Config;
