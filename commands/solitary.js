const Discord = require('discord.js');

module.exports = {
	name: 'solitary',
	description: 'Assign the role of Solitary Confinement to a user, note that Lieutenants and Commanders are immune',
	usage: '[username]',
	cooldown: 30,
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to send them to solitary!');
		}
		const taggedUser = message.mentions.users.first();
		const solitaryEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle(`YOU! ${taggedUser.name}! SOLITARY! NOW!`)
			.setDescription(`${taggedUser.name} now has the Solitary Confinement role.`)
			.setImage('https://ace7.acecombat.jp/assets/images/column/03/ph_444_08_small.jpg');

		const role_sol = message.guild.roles.find('name', 'Solitary Confinement');
		const role_agent = message.guild.roles.find('name', 'Agent');
		const member = message.mentions.members.first();
		if (member.roles.exists('name', 'Solitary Confinement')) {
			return message.reply(`${taggedUser.name} is already in Solitary.`);
		}
		else if ((member.roles.exists('name', 'Lieutenant') || (member.roles.exists('name', 'Commander')))) {
			return message.reply(`${taggedUser.name} has immunity to this command.`);
		}
		else {
			member.addRole(role_sol);
			if (member.roles.exists('name', 'Agent')) {
				member.removeRole(role_agent);
			}
			message.channel.send(solitaryEmbed);
		}
	},
};
