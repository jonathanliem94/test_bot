const Discord = require('discord.js');

module.exports = {
	name: 'unsol',
	description: 'Remove user from Solitary Confinement',
	usage: '[username]',
	cooldown: 30,
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to remove them from solitary!');
		}
		const taggedUser = message.mentions.users.first();
		const pardonEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle(`${taggedUser.name}! You have been granted a royal pardon, use it well.`)
			.setImage('https://ace7.acecombat.jp/assets/images/column/03/ph_other_06_large.jpg');

		const role_sol = message.guild.roles.find('name', 'Solitary Confinement');
		const role_agent = message.guild.roles.find('name', 'Agent');
		const member = message.mentions.members.first();
		if (member.roles.exists('name', 'Solitary Confinement')) {
			return message.reply('that user isn\'t in Solitary, what the heck are you doing?');
		}
		else if ((member.roles.exists('name', 'Lieutenant') || (member.roles.exists('name', 'Commander')))) {
			return message.reply(`${taggedUser.name} is above these things.`);
		}
		else {
			member.removeRole(role_sol);
			member.addRole(role_agent);
			message.channel.send(pardonEmbed);
		}
	},
};