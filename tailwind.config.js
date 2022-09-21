/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        "dark":{
          DEFAULT:"#16213E",
          "deep":"#071023",
          "light":"#0F3460"
          
        },
        

      }
        
      
    },
  },
  plugins: [],
}
