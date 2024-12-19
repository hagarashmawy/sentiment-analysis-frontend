import path from "path";
import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const config = {
  entry: "./src/client/index.js",
  output: {
    libraryTarget: "var",
    library: "Client",
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin({
      dry: true, // Simulate the removal of files
      verbose: true, // Write Logs to Console
      cleanStaleWebpackAssets: true, // Automatically remove all unused webpack assets on rebuild
      protectWebpackAssets: false,
    }),
  ],
};

export default config;
