module.exports = {
  javascript: {
    test: /\.(ts|js)$/,
    loader: 'babel-loader',
    options: {
      presets: [
        ["@babel/env", {
          targets: {ie: '11'},
        }],
        ["@babel/typescript"]
      ],
      plugins: [
        ["@babel/plugin-proposal-decorators", {decoratorsBeforeExport: true}],
        ["@babel/proposal-class-properties", {loose: true}],
        "@babel/proposal-object-rest-spread"
      ]
    },
  },

  postcss: {
    test: /\.css$/,
    use: [
      'postcss-loader',
    ]
  },

  assets: {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ],
  },
};


