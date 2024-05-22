/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
            borderRadius: '4px',

          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '4px',

          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
            borderRadius: '4px',

          },
        },
        /* For Firefox */
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: '#888 #f1f1f1',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
  darkMode:"class",
}

