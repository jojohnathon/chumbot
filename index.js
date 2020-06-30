/* eslint-disable indent */
const Discord = require('discord.js');

const bot = new Discord.Client();

const prefix = process.env.prefix;

const { MessageEmbed } = require('discord.js');

const ping = require('minecraft-server-util');


bot.on('ready', () =>{
	console.log('Bot has come online.');
});


bot.on('message', message =>{

	const args = message.content.substring(prefix.length).split(' ')
 ;
	switch(args[0]) {
	case 'mc':

        if(!args[1]) return message.channel.send('You must type a minecraft server ip');
		ping(args[1], parseInt(25565), (error, response) =>{
			if(error) return message.channel.send('server is poo poo');
			const Embed = new MessageEmbed()
				.setTitle('Server Status')
				.addField('Server IP', response.host)
				.addField('Server Version', response.version)
				.addField('Online Players', response.onlinePlayers)
				.addField('Max Players', response.maxPlayers);

			message.channel.send(Embed);
		});
		break;

	}

});

bot.login(process.env.token);