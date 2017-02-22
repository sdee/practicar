var express = require('express');
var router = express.Router();

module.exports = function(bot) {
	bot.command('start', (ctx) => {
		console.log('start', ctx.from);
		ctx.reply('Welcome!');
	});

	bot.hears('hi', (ctx) => ctx.reply('Hey there!'));

	bot.on('sticker', (ctx) => ctx.reply('👍'));

	return router;
};
