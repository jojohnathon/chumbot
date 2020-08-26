const { DiscordAPIError, Channel } = require("discord.js");

module.exports = {
	name: 'watermonkey',
	description: 'water monkey',
	execute(message) {
       let args = message.content.substring(prefix.length).split(" ");

       switch(args[0]){
           case 'sendlocal':
               const attachment = new Attachment('./images/watermonke.png');
               message.Channel.send(message.author, attachment2)
       }
	},
};
