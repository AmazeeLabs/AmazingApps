const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const jsRule = {
  test: /\.(ts|js)$/,
  loader: 'babel-loader',
  options: {
    presets: [
      ["@babel/env", {
        targets: {chrome: '63'},
      }],
      ["@babel/typescript"]
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
    ]
  }
};

module.exports = {
  entry: {
    scripts: './scripts.ts',
    editor: './editor.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: { extensions: ['.ts', '.js', '.tsx', '.jsx'] },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      path: path.resolve(__dirname, 'dist')
    })
  ],

  module: {
    rules: [
      jsRule,
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ],
      }
    ]
  }
};
