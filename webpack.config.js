const path = require('path');

module.exports = {
  watch: true,
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "main.min.js",
    publicPath: "/build/",
    libraryTarget: "window"
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      "@": path.resolve(__dirname, ".")
    }
  },
  module: {
    rules: [
      { // transpile ECMAScript 5
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  }
};