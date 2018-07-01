/**
 * Module dependencies
 */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const APP_DIR = '../client/src/';


module.exports = merge(common, {

	mode: 'production',

	entry: {
		main: [path.resolve(__dirname, APP_DIR + 'index.jsx')]
	},

});