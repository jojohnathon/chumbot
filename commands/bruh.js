module.exports = {
	name: 'ping',
	description: 'reacts with bruh when someone says bruh',
	execute(message) {
		if (message.content === 'bruh') {
            message.react('🗿');
        }
	},
};
