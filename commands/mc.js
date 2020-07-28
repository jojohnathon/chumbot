/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = {
	name: 'mc',
	aliases: ['server', 'info'],
	description: 'checks server stuff',
	usage: '<server>',
	execute(message, args) {
		const arg = message.content.substring(procces.env.prefix.length).split(' ')
 ;
		switch(arg[0]) {
		case 'mc':

			if(!arg[1]) return message.channel.send('You must type a minecraft server ip');
			ping(arg[1], parseInt(25565), (error, response) =>{
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
	},
};