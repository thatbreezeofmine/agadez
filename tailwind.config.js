module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arsenica': ['arsenica', 'serif'],
      },
      colors: {
        'agadez-900' : '#6b287c',
        'agadez-800' : '#7a3e89',
        'agadez-700' : '#895396',
        'agadez-600' : '#9769a3',
        'agadez-500' : '#a67eb0',
        'agadez-400' : '#b594be',
        'agadez-300' : '#c4a9cb',
        'agadez-200' : '#e1d4e5',
        'agadez-100' : '#f0eaf2',
      },
    },
  },
  plugins: [],
}
