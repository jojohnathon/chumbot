const { DiscordAPIError, Channel } = require("discord.js");

module.exports = {
	name: 'watermonkey',
	description: 'water monkey',
	execute(message) {
        const file = new Discord.MessageAttachment('../images/watermonke.png');
        
        const exampleEmbed = {
            title: '',
            image: {
                url: 'attachment://watermonke.png',
            },
        };
        
        Channel.send({ files: [file], embed: exampleEmbed });
	},
};
