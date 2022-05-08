  const path = require("path");

  module.exports = {
    entry: {
      main: "./src/index.js"
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ],
    }
  }
