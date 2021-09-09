module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        white: "var(--white)",
        secondary: "var(--secondary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};