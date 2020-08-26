const { DiscordAPIError, Channel } = require("discord.js");

module.exports = {
	name: 'watermonkey',
	description: 'water monkey',
	execute(message) {
       message.Channel.send ('water monke', {files: ['./images/watermonke.js']})
	},
};
