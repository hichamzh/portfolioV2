/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        abysse: "#08202F",
        profond: "#0D2D40",
        mer: "#0F5C8A",
        craie: "#F4F6F5",
        calcaire: "#DCE3E0",
        soleil: "#F2B33D",
        encre: "#0E1B24",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
