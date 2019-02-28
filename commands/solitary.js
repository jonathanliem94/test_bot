const Discord = require('discord.js');

module.exports = {
	name: 'solitary',
	description: '!solitary',
	execute(message, args) {
		const solitaryEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle('YOU! SOLITARY! NOW!')
			.setImage('./resources/solitary_bw.png');
		message.channel.send(solitaryEmbed);
	},
};
