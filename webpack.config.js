const path = require("path");

module.exports = {
  entry: [__dirname + "/src/scss/style.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "css/", name: "[name].min.css" },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
