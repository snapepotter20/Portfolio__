/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        panel: "#0b1728",
        cyan: "#67e8f9",
        orange: "#fb923c",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Avenir Next"', '"Segoe UI"', "sans-serif"],
        display: ['"Space Grotesk"', '"Avenir Next"', "sans-serif"],
      },
      boxShadow: {
        panel: "0 18px 70px rgba(15, 23, 42, 0.35)",
      },
      backgroundImage: {
        hero: "linear-gradient(135deg, rgba(103, 232, 249, 0.16), rgba(251, 146, 60, 0.12))",
      },
    },
  },
  plugins: [],
};
