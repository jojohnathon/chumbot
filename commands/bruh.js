module.exports = {
	name: 'bruh',
	description: 'reacts with bruh when someone says bruh',
	execute(message) {
		if (message.content === 'bruh') {
            message.react('🗿');
        }
	},
};
