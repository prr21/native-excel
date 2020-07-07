const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    port: 9000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
  ],
  module: {
    rules: [
      {
        test: /.s[as]s$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true
            }
          },
          'sass-loader',
          'css-loader'
        ]
      }
    ]
  }
});