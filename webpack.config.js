const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ]
  },
  output: {
    publicPath: '/',
    filename: 'dist/[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './index.html' }),
    new ExtractTextPlugin('dist/styles.css')
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /semantic-ui-css.*\.css/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /src.*\.css/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              url: false,
              localIdentName: '[hash:base64:3]'
            },
          },
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
};
