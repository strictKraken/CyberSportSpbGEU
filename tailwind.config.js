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
      titleBigDynamic: "clamp(1rem, 6vw, 90px)",
    },
    backgroundPosition: {
      bgbg: "center left 95%",
    },
    extend: {
      gridTemplateColumns: {
        "news-grid-main": "repeat(auto-fill, minmax(312px, 1fr))",
      },
      colors: {
        "main-bg": "#1c1c1e",
        purpule: "#6C48D1",
        "purple-dark": "#4B2E9C",
        "dark-gray": "#333336",
        bgDark: "rgba(34, 30, 38, 0.51)",
        shadowFooter: "rgba(13, 13, 13, 1)",
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
      backgroundImage: {},
    },
  },
  plugins: [],
};
