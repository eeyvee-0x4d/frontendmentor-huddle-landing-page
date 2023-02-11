module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
        xs: '375px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1200px'
    },
    colors: {
        'violet': 'hsl(257, 40%, 49%)',
        'soft-magenta': 'hsl(300, 69%, 71%)',
        'white': '#ffffff'
    },
    extend: {
        fontFamily: {
            'sans': ['"Open Sans"', 'sans-serif'],
            'heading': ['Poppins', 'sans-serif']
        }
    },
  },
  plugins: [],
}