/**
 * Module dependencies
 */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const APP_DIR = '../client/src/';
const OUTPUT_DIR = '../.tmp/public/';

module.exports.webpack = {

	mode: 'development',

	//context: path.resolve(__dirname, APP_DIR),

	node: {
		fs: 'empty',
	},

	//Multi Page Application 
	//https://webpack.js.org/concepts/entry-points/#multi-page-application
	entry: {
		main: ['react-hot-loader/patch', path.resolve(__dirname, APP_DIR + 'index.jsx'), 'webpack-hot-middleware/client']
		/*vendor: [
			'react',
			'react-bootstrap',
			'react-vis',
			'react-big-calendar',
			'immutable',
			'react-bootstrap-typeahead',
			'react-map-gl',
			'react-dom',
			'react-redux',
			'react-router-dom',
			'redux',
			'redux-thunk',
			'lodash',
			'moment',
		]*/
	},

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
				/*
				main: {
					minChunks: 2,
					priority: -20
				},*/
			}
		}
	},

	//Multiple Entry Points
	//https://webpack.js.org/concepts/output/#multiple-entry-points
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
				//loader: ['react-hot-loader/webpack','babel-loader'],
				exclude: /node_modules(?!\/(something|something-else))/
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}

		]
	},

	plugins: [
		//new BundleAnalyzerPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		//new webpack.NoEmitOnErrorsPlugin(), //NoEmitOnErrorsPlugin -> optimization.noEmitOnErrors (on by default in production mode)
		//new ExtractTextPlugin("styles.css"),
		new webpack.DefinePlugin({
			"require.specified": "require.resolve"
		}),
		new CleanWebpackPlugin(path.resolve(__dirname, OUTPUT_DIR), {
			root: path.resolve(__dirname, '..'),
			verbose: true
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
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
			filename: "styles.css"
			//chunkFilename: "[id].css"
		})
	]

};