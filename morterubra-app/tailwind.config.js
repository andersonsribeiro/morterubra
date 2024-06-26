/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Merriwheater", "serif"],
      sans: ["Poppins", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [],
};
