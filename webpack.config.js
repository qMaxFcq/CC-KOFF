module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },
};
