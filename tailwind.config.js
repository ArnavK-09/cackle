/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: "class",
  theme: {
    screens: {
      xs: "614px",
      sm: "987px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px",
    },

    extend: {
      colors: {
        cackle: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#1f2937",
          500: "#307af2",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
