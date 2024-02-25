import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        tertiary: 'rgb(var(--color-tertiary))',
        accent: 'rgb(var(--color-accent))',
        secondaryAccent: 'rgb(var(--color-secondaryAccent))',
        onPrimary: 'rgb(var(--color-onPrimary))',
        onSecondary: 'rgb(var(--color-onSecondary))',
        onTertiary: 'rgb(var(--color-onTertiary))',
        onAccent: 'rgb(var(--color-onAccent))',
        onSecondaryAccent: 'rgb(var(--color-onSecondaryAccent))',
      },
      fontSize: {
        '40': ['2.5rem', '2.5rem'],
      },
      boxShadow: {
        accent: '0px 0px 10px 0px rgb(var(--color-accent))',
      },
    },
  },
  plugins: [],
};
export default config;
