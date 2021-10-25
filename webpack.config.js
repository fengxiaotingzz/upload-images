const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./test/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]_[chunkhash:8].js",
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./test/index.html",
      filename: "index.html",
      inject: true,
    }),
  ],
};
