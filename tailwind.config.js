/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontWeight:{
      "100":"100",
      "300":"300",
      "400":"400",
      "700":"700",
      "900":"900",
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
      },
    },
  },
  plugins: [],
}
