/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F4EF',
        'omo-orange': '#F26419',
        ember: '#FF8C42',
        obsidian: '#1A1A1A',
        graphite: '#4A4A4A',
        secondary: '#1E3050',
        frost: 'rgba(255,255,255,0.55)',
        'frost-border': 'rgba(255,255,255,0.35)',
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'warm-glow': '0 8px 40px rgba(242,100,25,0.10), 0 2px 8px rgba(0,0,0,0.06)',
        'elevated-warm': '0 16px 60px rgba(242,100,25,0.16), 0 4px 16px rgba(0,0,0,0.08)',
        'button-glow': '0 0 24px rgba(242,100,25,0.45)',
      },
      borderRadius: {
        'glass-panel': '2rem',
        'glass-card': '1.5rem',
      }
    },
  },
  plugins: [],
}
