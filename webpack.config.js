/*
 * @Date         : 2021-09-30 13:54:47
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-09-30 17:53:37
 * @FilePath     : \webpack.config.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  devtool: "inline-source-map",
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader", // 处理以.vue结尾的文件
      },
      {
        test: /\.styl$/,
        loader: "stylus-loader",
      },
      {
        test: /\.css$/, // 处理css文件
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.pug$/,
        loader: "pug-plain-loader",
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false, // 这里设置为false
            },
          },
        ],
      },
    ],
  },
};
