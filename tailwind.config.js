/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'Josefin': ['Josefin Sans', 'sans-serif'],
      'Righteous': ['Righteous', 'cursive'],
      'Poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'BACKGROUND': '#282a36',
        'CURRENT_LINE': '#44475a',
        'FOREGROUND': '#f8f8f2',
        'COMMENT': '#6272a4',
        'CYAN': '#8be9fd',
        'GREEN': '#50fa7b',
        'ORANGE': '#ffb86c',
        'PINK': '#ff79c6',
        'PURPLE': '#bd93f9',
        'RED': '#ff5555',
        'YELLOW': '#f1fa8c',
      },
    },
  },
  plugins: [],
};