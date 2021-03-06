'use strict';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    filename: 'app.js',
    path: __dirname + '/static/build',
    publicPath: '/'
  },
  // devtool: 'eval',
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: 'css-loader?sourceMap!sass-loader?sourceMap'
          }
        )
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /.*\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|swf)$/,
        loader: 'file-loader?name=assets/[hash].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};
