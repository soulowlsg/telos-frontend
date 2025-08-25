/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8C30F5",
        secondary: {
          "50": "#D6B1FF",
          "100": "#ffffff"
        }
      },
      fontSize: {
        H1: ["72px","98px"],
        Lead1: ["18px","32px"],
      },
      
    
      spacing: {
        18: "72px",
        19: "76",
      }
    },
  },
  plugins: [],
}

