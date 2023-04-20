const path = require("path");
// import orther module
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// import modeul
const commonConfig = require("./webpack.config");

const devConfig = merge(commonConfig, {
  mode: "production",

  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].[hash].min.js", //เอาพวกคอมเม้นกับช่องว่างต่างๆออก
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()],

  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
      new HtmlwebpackPlugin({
        template: "./src/template/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
});

module.exports = devConfig;
