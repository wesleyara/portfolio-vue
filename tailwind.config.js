/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"]
      },
      colors: {
        mirage: {
          50: "#f0f7fe",
          100: "#deecfb",
          200: "#c4e0f9",
          300: "#9cccf4",
          400: "#6dafed",
          500: "#4b90e6",
          600: "#3674da",
          700: "#2d60c8",
          800: "#2a4fa3",
          900: "#274481",
          950: "#0f172a",
        },
        emerald: {
          50: "#edfff7",
          100: "#d5ffee",
          200: "#aeffde",
          300: "#70ffc6",
          400: "#2bfda7",
          500: "#00dc82",
          600: "#00c06d",
          700: "#009658",
          800: "#067549",
          900: "#07603e",
          950: "#003721",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
