const Discord = require('discord.js');
const { CMD, LT, AGT, SOL } = require('../resources/roles.json');

module.exports = {
	name: 'unsol',
	description: 'Remove user from Solitary Confinement. Only the CMDR & LT can unsol.',
	usage: '[username]',
	cooldown: 30,
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		const author = message.member;

		if (!message.mentions.members.size) {
			return message.reply('you need to tag a user in order to remove them from solitary!');
		}

		if (!(author.roles.exists('name', CMD)) && !(author.roles.exists('name', LT))) {
			return message.reply('Permission Denied.');
		}

		const taggedUser = message.mentions.members.first();
		if (!(taggedUser.roles.exists('name', SOL))) {
			return message.reply('that user isn\'t in Solitary, what the heck are you doing?');
		}
		else {
			const pardonEmbed = new Discord.RichEmbed()
				.setColor('#0099ff')
				.setTitle(`${taggedUser.nickname}! You have been granted a royal pardon, use it well.`)
				.setImage('https://ace7.acecombat.jp/assets/images/column/03/ph_other_06_large.jpg');

			taggedUser.removeRole(SOL);
			taggedUser.addRole(AGT);
			message.channel.send(pardonEmbed);
		}
	},
};