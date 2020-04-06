/* global __dirname, require, module */

const webpack = require("webpack");
const path = require("path");
const env = require("yargs").argv.env; // use --env with webpack 2
let libraryName = "sdk-lib";

// let plugins = [];
let outputFile;
let isMinimize = false;
let mode = "development"; // development/production/none

if (env === "build") {
  isMinimize = true;
  mode = "production";
  outputFile = libraryName + ".min.js";
} else {
  outputFile = libraryName + ".js";
}
const config = {
  entry: ["./app/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: outputFile,
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        use: [
          {
            loader: "babel-loader"
          }
        ],
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  },
  devServer: {
    port: 3000,
    contentBase: __dirname + "/build",
    inline: true
  },
  optimization: {
    minimize: isMinimize //Update this to true or false
  },
  mode: mode
  // plugins: plugins
};
module.exports = config;
