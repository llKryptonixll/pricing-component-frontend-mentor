/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html" , "./public/*.js"],
  theme: {
    colors: {
      "primary-color-gradient1" : "var(--primary-color-gradient1)",
      "primary-color-gradient2" : "var(--primary-color-gradient2)",
      "Light-Grayish-Blue" : "var(--Light-Grayish-Blue)",
      "Grayish-Blue" : "var(--Grayish-Blue)",
      "Dark-Grayish-Blue" : "var(--Dark-Grayish-Blue)",
      "white" : "var(--white)",
      "transparent" : "var(--transparent)"
    },
    extend: {
      fontFamily: {
        Montserrat : ["Montserrat", "sans-serif;"]
      }
    }
  },
  plugins: [],
}
