/* eslint-disable indent */
const Discord = require('discord.js');

const bot = new Discord.Client();

const prefix = process.env.prefix;

// const config = require('./config.json');

const { MessageEmbed } = require('discord.js');

const ping = require('minecraft-server-util');

const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
	const command = require('`./commands/${file}');

	client.commands.set(command.name, command);
}
	

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

bot.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping') {
        bot.commands.get('ping').execute(message, args);
    } 
});

bot.login(process.env.token);