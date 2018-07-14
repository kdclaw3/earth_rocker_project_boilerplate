/**
 * Module dependencies
 */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const OUTPUT_DIR = '../.tmp/public/';


module.exports = {

/*
WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  310509c95512893dc661bd3a6b0d2a5d.jpg (336 KiB)
  bundle.vendor.js (572 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (700 KiB)
      bundle.vendor.js
      style.main.css
      bundle.main.js
*/

/*
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        main: {
          chunks: 'initial',
          name: 'vendor',
          priority: -10,
          test: /node_modules\/(.*)\.js/
        }
      }
    }
  },
*/

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  output: {
    path: path.resolve(__dirname, OUTPUT_DIR),
    filename: 'bundle.[name].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
        exclude: /(node_modules|lowdash)/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      }

    ]
  },

  plugins: [
    new webpack.ProgressPlugin({
      profile: false
    }),
    new CleanWebpackPlugin(path.resolve(__dirname, OUTPUT_DIR), {
      root: path.resolve(__dirname, '..'),
      verbose: true
    }),
    new CopyWebpackPlugin([
      {
        ignore: ['.DS_Store'],
        from: './client/public/',
        to: path.resolve(__dirname, '../.tmp/public/')
      }
    ]),
    new CaseSensitivePathsPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'style.[name].css'
      // chunkFilename: "[id].css"
    })
  ]

};
