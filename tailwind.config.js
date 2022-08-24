module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        img: "url('../src/img/imgSectionHero.png')",
        new: "url('../src/img/imgSectionSteps.jpg')",
      }),
    },
  },
  plugins: [],
};
