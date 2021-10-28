module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      black: "#000",
      darkbg: "#2c2620b3",

      primary: {
        light: "#E5E5E5",
        DEFAULT: "#F2994A",
        hover: " #F6B982",
        dark: "#EC6A2F",
      },
      secondary: {
        DEFAULT: "#333333",
        dark: "#261505",
      },
    },
    boxShadow: {
      sm: "0 1px 4px #ccc",
    },
    screens: {
      sm: { max: "650px" },
      md: { min: "651px", max: "1024px" },
      lg: { min: "1024px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
