const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        manrope: ["Manrope"],
        serif: ["Source Serif 4", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        contrast: "var(--color-background)",
        black: "var(--color-black)",
      },
      textColor: {
        default: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
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
      boxShadow: {
        innerPrimary : "0 0 0 2px var(--color-primary), inset 0 0 0 1px transparent, 0 0 0 0 transparent",
        mdPrimary: " 0 0 0 0 var(--color-primary),inset 0 0 0 1px transparent, 0 0 0 0 transparent;",
        innerBlack : "0 0 0 2px var(--color-black), inset 0 0 0 1px transparent, 0 0 0 0 transparent",
        mdBlack: " 0 0 0 0 var(--color-black),inset 0 0 0 1px transparent, 0 0 0 0 transparent;"
      },
      borderWidth: {
        DEFAULT: '0.8px',
        '1': '1px',
        
      } ,
      borderRadius: {
        "large" : "46px"
      }
    },
  },

  plugins: [],
};
