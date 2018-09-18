const webpack = require("webpack");
const path = require("path");

module.exports = {
  target: "web",
  entry: path.resolve("src/app.js"),
  output: {
    filename: "app.js",
    path: path.join(__dirname, "/dist/"),
    libraryTarget: "umd",
    umdNamedDefine: true,
    library: "App"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./public",
    port: 8089
  }
};
