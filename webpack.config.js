const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['react-hot-loader/patch',path.join(__dirname,'src/client/','index.js')],
  output: {
    path: path.join(__dirname,'client'),
    filename: 'client.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname,'src'),'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname,'src'),
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'./public/index.html'),
      favicon: './public/favicon.ico'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|ico)$/,
        loaders: ["file-loader"]
      }
    ]
  },
  // devServer: {
  //   host: 'localhost',
  //   port: 1987
  // },
};