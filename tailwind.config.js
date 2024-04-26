/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tailus/themer-**/dist/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: colors.blue,
        secondary: colors.purple,
        accent : colors.pink,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
        info: colors.blue,
        gray : colors.zinc,
        white: colors.white,
        black: colors.black,
        transparent: colors.transparent,
    })
    },
  },
  plugins: [],
}

