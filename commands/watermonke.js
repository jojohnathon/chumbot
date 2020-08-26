const { DiscordAPIError, Channel } = require("discord.js");

module.exports = {
	name: 'watermonkey',
	description: 'water monkey',
	execute(message) {
        const attachment = new Attachment('./images/watermonke.png');
        message.Channel.send(message.author, attachment2)
        if (error) {
            console.log(error);
        }
       }
	};
