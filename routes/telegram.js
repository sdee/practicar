var express     = require('express');
var router      = express.Router();

var token = process.env.TELEGRAM_TOKEN;

router.get('/practicarhook', function (req, res) {
  res.json({ok: true});
});

router.post('/practicarhook', function (req, res) {
  var data = req.body;
  console.log(req.body);
  if (!data || !data.message) {
    return res.json({ ok: false });
  }
  var updateId = data.update_id;
  var message = data.message;
  var mid = message.message_id;
  var from = message.from;
  var chat = message.chat;
  var mDate = message.date;
  var text = message.text;
  var cmd;
  var back = {
    ok: true,
    method: 'sendMessage',
    chat_id: chat.id,
    text: 'Sorry, I do not understand. Try /help for my commands'
  };

  if (text.startsWith('/')) {
    cmd = text.substr(1, text.length);
    switch (cmd) {
      case 'echo':
        back.text = text;
        break;
      case 'start':
        back.text = 'hello, ' + chat.username + ', I am PracticarBot! Send me a command like /conj';
        break;
      case 'conj':
        back.text = 'coming soon';
        break;
      case 'help':
        back.text = 'help text coming soon';
        break;
    }
  }

  res.json(back);
});

module.exports = router;
