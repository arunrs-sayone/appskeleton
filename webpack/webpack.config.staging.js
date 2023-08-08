const Webpack = require('webpack');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const Path = require("path");

module.exports = merge(common, {
  mode: 'production',
  stats: 'normal',
  bail: true,
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      VERSION: JSON.stringify(require('../package.json').version),
      // BASE_URL: JSON.stringify(''),
      // API_VERSION: JSON.stringify(''),
      // GCP_URL: JSON.stringify(''),
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/bundle.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        include: Path.resolve(__dirname, "../src"),
        loader: "ts-loader",
      },
      {
        test: /\.s?css/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],


  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
});
