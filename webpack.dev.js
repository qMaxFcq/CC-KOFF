const path = require("path");
// import orther module
const { merge } = require("webpack-merge");
const HtmlwebpackPlugin = require("html-webpack-plugin");

// import modeul
const commonConfig = require("./webpack.config");

const devConfig = merge(commonConfig, {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlwebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],
});

module.exports = devConfig;
