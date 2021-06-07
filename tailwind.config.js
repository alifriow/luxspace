module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["*.html", "*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        pinker: "#F9CADA",
        blacker: "#242f31",
        grayer: "#F9F9F9",
        grayer1: "F0F0F0",
        grayer2: "D2D2D2",
      },
      flexGrow: {
        0: 0,
        1: 1,
        2: 2,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
