/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#0D100F',
        secondary: '#e02900',
      },
      colors: {
        primary: '#FFF',
      },
      gridColumn: {
        content: 'content',
        'full-width': 'full-width',
      },
    },
  },
  plugins: [],
}
