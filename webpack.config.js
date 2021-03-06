const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './app/assets/js/main.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '/dist/assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  externals: {
        // Use external version of jQuery
        "jquery": "jQuery"
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
    publicPath: '/assets',
    reload: true
  },
  module: {
    noParse: [ "jQuery" ],
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve('app/assets/js')
        ],
        exclude: '/node_modules/jquery'
      },
      {
        test: /\.scss$/,
        loader:
          ExtractTextPlugin.extract('css!postcss!sass'),
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin({ filename: './css/style.css', disable: false, allChunks: true })
  ]
};
