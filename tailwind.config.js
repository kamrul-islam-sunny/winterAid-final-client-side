/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins" : ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
   
  ],
}

