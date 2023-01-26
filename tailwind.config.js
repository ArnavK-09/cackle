/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: "class",
  theme: {
    screens: {
      xs: "614px",
      sm: "1002px",
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
        cackle2: {
          50: "#38444d",
          100: "#3a2c20",
          200: "#fec7aa",
          300: "#fda374",
          400: "#fb7d3c",
          500: "#f96416",
          600: "#ea580c",
          700: "#c24a0c",
          800: "#9a4112",
          900: "#7c3612",
        },
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
