const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        serif: ["Source Serif 4", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        contrast: "var(--color-background)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
        contrast: "var(--color-text-contrast)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
        footer: "var(--color-background-footer)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },

  plugins: [],
};
