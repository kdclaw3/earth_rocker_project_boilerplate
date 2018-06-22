/**
 * Module dependencies
 */


/**
 * Webpack hook
 *
 * @description :: A hook to compile assets using Webhook.
 */

module.exports = function defineWebpackHook(sails) {

	return {

		/**
		 * Runs when a Sails app loads/lifts.
		 *
		 * @param {Function} done
		 */

		initialize: function (done) {

			// Otherwise, create a compiler so that we can watch files.
			sails.after('hook:http:loaded', function () {

				const webpack = require('webpack');
				const compiler = webpack(sails.config.webpack);

				if (process.env.NODE_ENV === 'development') {

					const expressApp = sails.hooks.http.app;

					sails.log.info('[WEBPACK HOOK] -> webpack: webpack-dev-middleware.');
					expressApp.use(require('webpack-dev-middleware')(compiler, {
						stats: {
							colors: true
						},
					}));

					sails.log.info('[WEBPACK HOOK] -> webpack: webpack-hot-middleware.');
					expressApp.use(require("webpack-hot-middleware")(compiler, {
						noInfo: true,
						//quiet: true,
						reload: true
					}));

				} else {

					sails.log.info('[WEBPACK HOOK] -> webpack: compiler init.');

					let configFile = sails.config.webpack;
					webpack(configFile, function (err, stats) {

						if (err) throw err;

						sails.log.info('[MENTOR] -> webpack: compiler loaded.');
						sails.log.debug(stats.toString({
							colors: true,
							chunks: false
						}));

					});

				}

			});

			// Continue lifting Sails.
			return done();

		}

	};

};