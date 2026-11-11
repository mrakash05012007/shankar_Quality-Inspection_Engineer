/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#F6F8FA',
        'bg-secondary': '#EAF1F6',
        'industrial-blue': '#164E78',
        'deep-blue': '#103653',
        'safety-orange': '#E58A32',
        'heading': '#172B3A',
        'body-text': '#647586',
        'white-card': '#FFFFFF',
        'border-color': '#DCE4EA',
        'soft-orange': '#FFF3E5',
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        scan: {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(22, 78, 120, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(22, 78, 120, 0.05) 1px, transparent 1px)",
        'blueprint': "linear-gradient(rgba(22, 78, 120, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(22, 78, 120, 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-30': '30px 30px',
        'grid-50': '50px 50px',
      },
    },
  },
  plugins: [],
}

