/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#FAF6EF',
        'parchment-dark': '#F0E9DC',
        brown: {
          DEFAULT: '#3B2A1A',
          light: '#5C4033',
          lighter: '#8B6A50',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E0BE70',
          dark: '#A07830',
        },
        sage: {
          DEFAULT: '#8A9E7B',
          light: '#A8BF9A',
          dark: '#6B7D60',
        },
        ink: '#1A1008',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 4px 20px rgba(59,42,26,0.12)',
        'warm-lg': '0 8px 40px rgba(59,42,26,0.18)',
        card: '0 2px 12px rgba(59,42,26,0.08)',
      },
    },
  },
  plugins: [],
}
