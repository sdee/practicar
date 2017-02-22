const _ = require('underscore');
const express = require('express');
const router = express.Router();

const token = process.env.TELEGRAM_TOKEN;

router.get('/practicarhook', function (req, res) {
	res.json({ok: true});
});

router.post('/practicarhook', function (req, res) {
	var data = req.body;
	console.log(req.body);
	if (!data || !data.message) {
		return res.json({ ok: false });
	}
	const updateId = data.update_id;
	const message = data.message;
	const mid = message.message_id;
	const from = message.from;
	const chat = message.chat;
	const mDate = message.date;
	const text = message.text;
	const entities = message.entities;
	let back = {
		ok: true,
		method: 'sendMessage',
		chat_id: chat.id,
		text: 'Sorry, I do not understand. Try /help for my commands'
	};

	if (text.startsWith('/')) {
		const cmdEntity = _.find(entities, function(entity) { return entity.type === 'bot_command'; });
		if (cmdEntity) {
			const cmd = text.substr(cmdEntity.offset, cmdEntity.length);
			switch (cmd) {
				case 'start':
					back.text = 'hello, ' + chat.username + ', I am PracticarBot! Send me a command like /conj';
					break;
				case 'conj': {
					const verbOffset = cmdEntity.offset + cmdEntity.length + 1;
					const verb = text.substr(verbOffset, text.length - verbOffset);
					back.text = 'you want to conjugate ' + verb;
					break;
				}
				case 'help':
					back.text = 'help text coming soon';
					break;
			}
		}
	}

	res.json(back);
});

module.exports = router;
