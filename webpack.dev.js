const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist')
      }]
    }),
  ],
  devServer: {
    contentBase: './dist',
    port: 9000
  },
  module: {
    rules: [{
      test: /.s[as]s$/i,
      use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: true,
            reloadAll: true
          }
        },
        'sass-loader',
        'css-loader'
      ]
    }]
  }
});