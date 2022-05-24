module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize : {
         '2xs' : ".50rem"
      },
      fontFamily: {
        'arsenica': ['arsenica', 'serif'],
      },
      colors: {
        'agadez-900' : '#4b2a7b',
        'agadez-800' : '#5d3f88',
        'agadez-700' : '#6f5595',
        'agadez-600' : '#816aa3',
        'agadez-500' : '#937fb0',
        'agadez-400' : '#a595bd',
        'agadez-300' : '#b7aaca',
        'agadez-200' : '#c9bfd7',
        'agadez-100' : '#dbd4e5',
      },
    },
  },
  plugins: [],
}
