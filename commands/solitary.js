const Discord = require('discord.js');
const { CMD, LT, SGT, AGT, SOL } = require('../resources/roles.json');

module.exports = {
	name: 'solitary',
	description: 'Assign the role of Solitary Confinement to a user, note that this command only can work on Agents',
	usage: '[username]',
	cooldown: 30,
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		const author = message.member;

		if (!message.mentions.members.size) {
			return message.reply('you need to tag a user in order to send them to solitary!');
		}

		if (!(author.roles.exists('name', CMD)) && !(author.roles.exists('name', LT))) {
			return message.reply('Permission Denied.');
		}

		const taggedUser = message.mentions.members.first();
		if (taggedUser.roles.exists('name', SOL)) {
			return message.reply(`${taggedUser.nickname} is already in Solitary.`);
		}
		else if (taggedUser.roles.exists('name', CMD) || taggedUser.roles.exists('name', LT) || taggedUser.roles.exists('name', SGT)) {
			return message.reply(`${taggedUser.nickname} has immunity to this command.`);
		}
		else {
			const solitaryEmbed = new Discord.RichEmbed()
				.setColor('#0099ff')
				.setTitle(`YOU! ${taggedUser.nickname}! SOLITARY! NOW!`)
				.setDescription(`${taggedUser.nickname} now has the Solitary Confinement role.`)
				.setImage('https://ace7.acecombat.jp/assets/images/column/03/ph_444_08_small.jpg');

			taggedUser.addRole(SOL);
			if (taggedUser.roles.exists('name', AGT)) {
				taggedUser.removeRole(AGT);
			}
			message.channel.send(solitaryEmbed);
		}
	},
};
