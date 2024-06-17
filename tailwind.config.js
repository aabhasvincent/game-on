/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pdmain: "#000033",
        pdsecondary: "#0b0b2a",
      },
    },
    animation: {
      marquee: 'marquee 10s linear infinite',
      marquee2: 'marquee2 10s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
  },
  plugins: [],
};
