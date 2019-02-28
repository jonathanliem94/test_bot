const moment = require('moment');

module.exports = {
	name: 'div2',
	description: 'Countdown to the release of the Division 2',
	usage: '[command name]',
	cooldown: 25,
	execute(message, args) {
		const releasedate = moment('2019-03-16 00:00:00');

		var difference;
		var days;
		var hours;
		var minutes;

		var now = moment();
		difference = moment.duration(releasedate.diff(now));

		// get number of days
		days = difference.days();

		// get number of hours
		difference = difference.subtract(days, 'd');
		hours = difference.get('hours');

		// get number of minutes
		difference = difference.subtract(hours, 'h');
		minutes = difference.get('minutes');

		message.channel.send('The Division 2 is releasing in ' + days + ' days, ' + hours + ' hours, ' + minutes + ' minutes. Assuming 16 March 00:00 GMT+8 Release.');
	},
};