/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx, ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#F0F2A6", //vanilla
        "primary-deep-blue": "#1C3144",
        "primary-rose": "#AA6373",
        "primary-blur-steel": "#8499B1",
        "primary-muted-teal": "#6C9A8B",


        background: "#0F0E17",
        "barbie-pink-background": "#ff0092",

        surface: "#1A1A2E",
        "surface-dark": "#0F0E17",
        "surface-light": "#16213E",

        foreground: "#FFFFFE",
        "foreground-muted": "#A7A9BE",
        "foreground-subtle": "#72757E",

        accent: "#FF6B6B",
        "accent-secondary": "#00B894",

        success: "#00B894",
        warning: "#FDCB6E",
        danger: "#FF6B6B",

        border: "#232946",
        "border-light": "#2E3354",

      },
      fontFamily: {
        mono: ['SpaceMono'],
      },
    },
  },
  plugins: [],
}