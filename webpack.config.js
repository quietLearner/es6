const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  devtool: "source-map", // debug in browser, bundle.js.map
  //entry: path.resolve(__dirname, "es6-src/app.js"),
  entry: {
    bundle: path.resolve(__dirname, "es6-src/index.js"),
  },
  output: {
    //https://webpack.js.org/guides/caching/
    filename: "[name].[contenthash].js", // name is bundle from entry
    path: path.resolve(__dirname, "es6-build"),
    clean: true, // remove the existing files first before generating new files
    assetModuleFilename: "[name][ext]", //keep the original picture name, https://webpack.js.org/guides/asset-modules/
  },
  module: {
    rules: [
      {
        // handle scss
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // use babel, transpile es6 to es5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], //https://babeljs.io/docs/babel-preset-env
          },
        },
      },
      {
        test: /\.(svg|jpg|png|gif|jpeg)$/i,
        type: "asset/resource", // https://webpack.js.org/guides/asset-modules/
      },
    ],
  },
  plugins: [
    // this will generate index.html with bundle.js automatically insert using template.html
    new HtmlWebpackPlugin({
      title: "Webpack5 App", //<title><%= htmlWebpackPlugin.options.title %></title>
      filename: "index.html",
      template: "es6-src/template.html",
    }),
    //new BundleAnalyzerPlugin({}),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "es6-build"), // where to serve the page?
    },
    port: 3000,
    open: true, //opne the browser
    hot: true,
    compress: true,
    historyApiFallback: true, //?
  },
};
