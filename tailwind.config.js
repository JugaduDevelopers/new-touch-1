/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      100: "100",
      300: "300",
      400: "400",
      700: "700",
      900: "900",
    },
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(200px,1fr))",
      },
      spacing: {
        container: `max(
            1rem,
            calc((100vw - calc(1440px - 1rem * 2)) / 2)
            )`,
        "sm-container": `max(
            1rem,
            calc((100vw - calc(550px - 1rem * 2)) / 2)
            )`,
      },
      colors: {
        blackX: "#212121",
        pinkX: "#FFEFEF",
        redX: "#D24648",
        whiteX: "#FFFFFF",
        darkPinkX: "#F39297",
        greyX: "#f5f5f5",
        peach: "#FFD7D7",
      },
      backgroundImage: {
        banner: "url('../../public/images/bannerImage.png')",
      },
      aspectRatio: {
        sliderDragableImage: "3/1",
      },
    },
  },
  plugins: [],
};
