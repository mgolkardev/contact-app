/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#21aa58",
      },
      width: {
        app: "550px",
      },
    },
  },
  plugins: [],
};
