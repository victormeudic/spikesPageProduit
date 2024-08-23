/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "verdi-gris": "#3AA39F",
        "mikado-yellow": "#FFC41F",
        "space-cadet": "#17183B",
        "cool-grey": "#A2A3B1",
        "french-grey": "#D1D1D8",
      },
    },
    fontFamily: { Poppins: ["Poppins"] },
  },
  plugins: [],
};
