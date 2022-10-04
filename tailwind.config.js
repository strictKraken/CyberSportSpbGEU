/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {},
    fontFamily: {
      heading: ["Batman Forever"],
      text: ["Arial"],
    },
    extend: {
      gridTemplateColumns: {
        'main-4': 'repeat(auto-fill, minmax(312px, 1fr))'
      },
      colors: {
        "main-bg": "#1c1c1e",
        purpule: "#6C48D1",
        "purple-dark": "#4B2E9C",
        bgDark: "rgba(34, 30, 38, 0.51)",
        shadowFooter: "rgba(13, 13, 13)",
      },
    },
  },
  plugins: [],
};
