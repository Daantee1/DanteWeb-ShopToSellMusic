module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {fontFamily: {
        body: [ 'Poppins', 'sans-serif']
      }},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["dark"],
    },
  }