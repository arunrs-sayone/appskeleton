const Path = require("path");
const Webpack = require("webpack");
const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    
    client: {
      overlay: {
        errors: false,
        warnings: false,
    }},
    open: "chrome",
    historyApiFallback: true,
    // port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    }
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      VERSION: JSON.stringify(require("../package.json").version),
    //   BASE_URL: JSON.stringify(""),
    //   API_VERSION: JSON.stringify(""),
    //   GCP_URL: JSON.stringify(""),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          {loader:"style-loader"},
          {loader:"css-loader",options: { sourceMap: true } },
          {loader:"sass-loader"},
        ]
      },
      {
        test: /\.(js|jsx)$/,
        include: Path.resolve(__dirname, "../src"),
        loader: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        include: Path.resolve(__dirname, "../src"),
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],

  },
});
