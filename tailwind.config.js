module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      colors: {
        "primary-blue": "#2547FA",
        "primary-orange": "#FF872E",
        "primary-green": "#22C58B",
        "secondary-blue": "#E7F1FC",
        "primary-black": "#34364A"
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
