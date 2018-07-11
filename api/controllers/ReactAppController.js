/**
 * ReactAppController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	find(req, res, next) {

		return res.sendFile(`${process.env.PWD}/client/public/index.html`);

	}

};
