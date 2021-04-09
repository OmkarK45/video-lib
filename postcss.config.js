// This came with boilerplate

// module.exports = {
//   plugins: [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('autoprefixer'),
//   ],
// }

// This is not working
module.exports = {
  plugins: [
    // require('postcss-import'),
    require("@tailwindcss/jit"),
    require("autoprefixer"),
  ],
}
