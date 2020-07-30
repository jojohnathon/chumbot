module.exports = {
	name: 'ping',
	cooldown: 5,
	description: 'Ping!',
	execute(message) {
		Discord.GuildMember.setVoiceChannel(719312319808798810);
	},
};


