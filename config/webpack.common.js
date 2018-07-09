/**
 * Module dependencies
 */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const OUTPUT_DIR = '../.tmp/public/';


module.exports = {

	optimization: {
		runtimeChunk: false,
		splitChunks: {
			cacheGroups: {
				main: {
					chunks: 'initial',
					name: 'vendor',
					priority: -10,
					test: /node_modules\/(.*)\.js/
				},
			}
		}
	},

	output: {
		path: path.resolve(__dirname, OUTPUT_DIR),
		filename: 'bundle.[name].js',
		publicPath: "/",
	},

	resolve: {
		extensions: ['.js', '.jsx']
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: ['babel-loader'],
				exclude: /(node_modules|lowdash)/,
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
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
				from : './client/public/',
				to   : path.resolve(__dirname, '../.tmp/public/'),
			},
		]),
		new CaseSensitivePathsPlugin(),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "style.[name].css"
			//chunkFilename: "[id].css"
		})
	]

};