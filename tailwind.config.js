module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:(theme)=> ({
        'back-img':"url('../src/image2.jpg')",
        'footer-img':"url('../src/components/image1_3.jpg')",
        'digit-img':"url('../src/image1_1.jpg')",
        'img':"url('../src/components/xzc.png')",
        'new':"url('../src/components/imageNew.jpg')",
      }),
    },
    // fontSize: {

    //   '7xl': '1.25rem',
    // }
  },
  plugins: [],
}