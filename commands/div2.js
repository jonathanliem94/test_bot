const moment = require('moment');

module.exports = {
	name: 'div2',
	description: 'Countdown to the release of the Division 2',
	usage: '[command name]',
	cooldown: 25,
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		const releasedate = moment('2019-03-11 21:00:00');

		var difference;
		var days;
		var hours;
		var minutes;

		var now = moment();

		if (moment(now).isAfter(releasedate)) {
			const actualrelease = moment('2019-03-14 21:00:00');

			if (moment(now).isAfter(actualrelease)) {
				message.channel.send('The Division 2 has already released! Have fun, Agent!');
			}
			else {
				difference = moment.duration(actualrelease.diff(now));

				/* 		const dif = moment(now).to(releasedate);
						console.log(dif); */

				// get number of days
				days = difference.days();
				// get number of hours
				hours = difference.hours();
				// get number of minutes
				minutes = difference.minutes();

				message.channel.send('The Division 2 is PROPERLY releasing in ' + days + ' days, ' + hours + ' hours, ' + minutes + ' minutes.');
			}

		}
		else {
			difference = moment.duration(releasedate.diff(now));

			/* 		const dif = moment(now).to(releasedate);
					console.log(dif); */

			// get number of days
			days = difference.days();
			// get number of hours
			hours = difference.hours();
			// get number of minutes
			minutes = difference.minutes();

			message.channel.send('The Division 2 is releasing in ' + days + ' days, ' + hours + ' hours, ' + minutes + ' minutes. EARLY access.');
		}
	},
};