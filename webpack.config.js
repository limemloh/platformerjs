var path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"]},
    ]
  }
};