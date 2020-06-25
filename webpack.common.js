const path = require("path");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  // If you use vendor...
  // entry: {
  //   main: "./src/index.js",
  //   vendor: "./src/vendor.js"
  // },
  // Create a vendor.js file in the src folder and import what you need => import "bootstrap";

  plugins: [new FaviconsWebpackPlugin("./src/logo.png")],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "img",
          },
        },
      },
    ],
  },

  // Source Map Fix...
  devtool: "inline-source-map",
};
