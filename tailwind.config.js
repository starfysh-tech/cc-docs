/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'terminal': {
          'bg': '#0d1117',
          'surface': '#161b22',
          'border': '#30363d',
          'text': '#f0f6fc',
          'muted': '#8b949e',
          'accent': '#58a6ff',
          'success': '#3fb950',
          'warning': '#d29922',
          'error': '#f85149',
        }
      }
    },
  },
  plugins: [],
}