const webpack = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
      },
      {
          test: /\.css$/,
          use: [
              {
                  loader: "style-loader"
              },
              miniCssExtractPlugin.loader,
              {
                  loader: 'css-loader',
                  options: { url: false }
              }
          ],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new miniCssExtractPlugin("[name].css"),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
