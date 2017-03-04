const _ = require('underscore');
const express = require('express');
const router = express.Router();
const quiz = require('../services/quiz');

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
	let back = {
		ok: true,
		method: 'sendMessage',
		chat_id: chat.id,
		text: 'Sorry, I do not understand. Try /help for my commands'
	};

	if (text.startsWith('/')) {
		const words = text.split(' ');
		const cmd = words[0].substr(1);
		switch (cmd) {
			case 'start':
				back.text = 'hello, ' + chat.username + ', I am PracticarBot! Send me a command like /conj';
				break;
			case 'conj': {
				if (words.length === 5) {
					const verb = words[1];
					const pronoun = words[2];
					const tense = words[3];
					const mood = words[4];
					const conj = quiz.generateConjugationByName(verb, pronoun, tense, mood);
					if (conj) {
						back.text = pronoun + ' ' + conj;
					} else {
						back.text = 'unable to conjugate with those options';
					}
				} else {
					back.text = '/conj requires verb pronoun tense mood'
				}
				break;
			}
			case 'help':
				back.text = 'help text coming soon';
				break;
		}
	}

	res.json(back);
});

module.exports = router;
