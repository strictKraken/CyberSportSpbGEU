/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1362px",
    },
    fontFamily: {
      heading: ["Batman Forever"],
      text: ["Arial"],
    },
    fontSize: {
      dynamic: "clamp(2rem, 10vw, 60px)",
    },
    extend: {
      gridTemplateColumns: {
        // "contacts-2": "minxmax(100px, 200px), minxmax(50px,1fr))",
        // "card-2": "1fr, 110px",

        // "info-2": "repeat(auto-fit, minmax(536px, 1fr))",
        // "main-4": "repeat(auto-fill, minmax(312px, 1fr))",
        "news-grid-main": "repeat(auto-fill, minmax(312px, 1fr))",
      },
      colors: {
        "main-bg": "#1c1c1e",
        purpule: "#6C48D1",
        "purple-dark": "#4B2E9C",
        bgDark: "rgba(34, 30, 38, 0.51)",
        shadowFooter: "rgba(13, 13, 13)",
      },
      keyframes: {
        lineInfinity: {
          "0%": { left: "0%" },
          "100%": { left: "-100%" },
        },
      },
      animation: {
        scrollLine: "lineInfinity 15s linear infinite",
      },
    },
  },
  plugins: [],
};
