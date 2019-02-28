module.exports = {
	name: 'food',
	description: 'Test Command',
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		message.channel.send('Advent Burgers are here!');
	},
};