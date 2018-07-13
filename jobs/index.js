const moment = require('moment');

/* eslint-disable no-unused-vars */
function addMinutes(date, minutes) {
	return new Date(date.getTime() + minutes * 60000);
}
const hourly = 60;
const daily = 1440;
/* eslint-enable no-unused-vars */


module.exports = {

	/**
	*
	* @param {integer} 		interval	//in minutes, minimum interval is 1 minute
	* @param {date} 			start			//time to start the job
	* @param {function} 	run				//function to run
	*
	*/

	aJob: {
		interval: hourly,
		start: new Date( moment().startOf('hour').add(30, 'minutes') ), // on the 30's of the hour
		run: function () {
			//simple function here
			sails.log.info('[JOB MANAGER] this job runs every minute.');
		}
	},

	bJob: {
		interval: 5,
		start: new Date( moment().startOf('hour').add(1, 'minutes') ),
		run: () => {
			sails.log.info('[JOB MANAGER] this job runs every five minutes on the 1,6,11,16,21 etc...');
		}
	},

	dataCleanup: {
		interval: 2,
		start: addMinutes(new Date(), 100), //start this job in 100 minutes and run every two minutes
		run: require('./datacleanup') //import function from a file
	},

	dataQuality: {
		interval: daily,
		start: addMinutes(new Date(), 30), //start this job once a 'daily' 30 minutes from now
		run: () => {
			sails.log.info('[JOB MANAGER] this job is boring and only executes once a day.');
		}
	}

};
