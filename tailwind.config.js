/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx,jpg,png}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('app/assets/konarska_main.jpg')",
      },
      fontFamily: {
        cormo: ["Cormorant"],
      },
    },
  },
  plugins: [],
};
