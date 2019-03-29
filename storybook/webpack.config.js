const path = require('path');
const common = require('./common-loaders');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// For building the library, we have to extract CSS.
common.postcss.use.unshift('css-loader');
common.postcss.use.unshift(MiniCssExtractPlugin.loader);

module.exports = {
  entry: {
    scripts: './scripts.ts',
    editor: './editor.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {extensions: ['.ts', '.js']},

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      path: path.resolve(__dirname, 'dist')
    })
  ],

  module: {
    rules: [
      common.javascript,
      common.postcss,
      common.assets
    ]
  }
};
