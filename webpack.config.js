const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV;

module.exports = {
  entry: './app/app.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/dist'),
  },

  devtool: 'source-map',
  devServer: {
    contentBase: './app',
  },

  mode: env || 'development',

  module: {
    rules: [
      //HTML BUILD
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      //BABEL
      {
        test: /\.js$/,
        exclude: /node_modules/,

        use: {
          loader: 'babel-loader',
          options: { presets: ['env', 'stage-2'] },
        },
      },
    ],
  },
  performance: { hints: false },
};
