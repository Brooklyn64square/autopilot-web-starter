
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media', // Enable dark mode based on system preference
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        accent: '#2DD4BF',
        dark: '#0B1B2B',
      },
    },
  },
  plugins: [],
}
