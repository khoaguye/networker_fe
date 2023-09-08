/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "tapia_blue": '#005d8f',
        "blue_light": '#e7f4fc',
        "blue_text": "#007dc3"
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'playball': ['"Playball"', 'cursive'],
      },
    },
  },
  plugins: [],
}

