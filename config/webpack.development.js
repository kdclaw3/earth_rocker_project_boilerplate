/**
 * Module dependencies
 */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const APP_DIR = '../client/src/';


module.exports.webpackdevelopment = merge(common, {

	mode: 'development',

	devtool: 'eval',

	entry: {
		main: ['react-hot-loader/patch', path.resolve(__dirname, APP_DIR + 'index.jsx'), 'webpack-hot-middleware/client']
	},

	plugins: [
		//new BundleAnalyzerPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]

});