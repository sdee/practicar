var express = require('express');
var router = express.Router();
const quizService = require('../services/quiz');
const numbersService = require('../services/numbers-quiz')

router.get('/', function(req, res, next) {
  const type = req.query.type;

  if (type === 'numbers') {
    const min = parseInt(req.query.min);
    const max = parseInt(req.query.max);
    res.json(numbersService.generateQuiz(500, min, max));
  } else {
    let verbSet=req.query.verbSet;
    if (!verbSet) {
      verbSet = 'default';
    }
    res.json(quizService.generateQuiz(500, verbSet));
  }

});

module.exports = router;
