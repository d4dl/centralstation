var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var node_dir = __dirname + '/node_modules';

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: "./src/app",

  output: {
    path: __dirname + "/",
    filename: "app.js"
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader?stage=0"] },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loaders: ["file-loader"] }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    alias: {
      'stompjs': node_dir + '/stompjs/lib/stomp.js',
    }
  },

  postcss: [
    require('autoprefixer'),
    require('postcss-nested')
  ]
}