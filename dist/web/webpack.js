'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  entry: './app/web/render.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};