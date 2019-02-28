const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 10,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			message.channel.send('Here\'s a list of all my commands:');
			message.channel.send(commands.map(command => command.name).join(', '));
			message.channel.send(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
		}
		else {
			const name = args[0].toLowerCase();
			const command = commands.get(name);

			if (!command) {
				return message.reply('that\'s not a valid command!');
			}

			message.channel.send(`**Name:** ${command.name}`);
			if (command.aliases) message.channel.send(`**Aliases:** ${command.aliases.join(', ')}`);
			if (command.description) message.channel.send(`**Description:** ${command.description}`);
			if (command.usage) message.channel.send(`**Usage:** ${prefix}${command.name} ${command.usage}`);
			if (command.cooldown) message.channel.send(`**Cooldown:** ${command.cooldown || 3} second(s)`);

			message.channel.send(data, { split: true });
		}


	},
};