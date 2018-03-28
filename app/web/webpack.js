const path = require('path');

module.exports = {
  entry: './app/web/render.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../app'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
