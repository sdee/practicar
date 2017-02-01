var express = require('express');
var router = express.Router();
const quizService = require('../services/quiz');

router.get('/', function(req, res, next) {
  res.json(quizService.generateQuiz(100));
});

module.exports = router;
