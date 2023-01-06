module.exports = {
  purge: [],
  darkMode: false,
  content: [
    "./src/**/*.{html,ts}",
  ], // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "button-color": "#75b96d",
        "background-box": "#1a2878",
      },
      width: {
        "image-width": "20px",
        "image-stuff-width": "50px",
      },
      height: {
        "image-height": "20px",
        "box-height-amulette": "450px",
        "box-height-botte": "450px",
        "box-height-ceinture": "400px",
        "box-height-anneau": "400px",
        "box-height-arme": "450px",
        "box-height-cape": "475px",
        "box-height-coiffe": "450px",
        "image-stuff-height": "50px",
        "box-height-familier": "200px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
