/** @type {import('tailwindcss').Config} */
export default {
  content: ["./main.jsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hal3: "url('/img/royKimochi.jpg')",
      },
    },
  },
  plugins: [],
};
