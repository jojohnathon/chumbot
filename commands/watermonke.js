module.exports = {
	name: 'water monkey',
	description: 'water monkey',
	execute(message) {
		message.channel.send ("water monke", {files: ["./images/watermonke.png"]});
	},
};
