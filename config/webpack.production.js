/**
 * Module dependencies
 */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const APP_DIR = '../client/src/';


module.exports = merge(common, {

  mode: 'production',

  entry: {
    main: [path.resolve(__dirname, APP_DIR + 'index.jsx')]
  },

  plugins: [
    // new BundleAnalyzerPlugin(),
    new MinifyPlugin({}, {
      comments: false
    })

  ]

});
