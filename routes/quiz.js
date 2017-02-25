var express = require('express');
var router = express.Router();
const quizService = require('../services/quiz');

router.get('/', function(req, res, next) {
  let verbSet = req.query.verbs;
  if (!verbSet) {
    verbSet = 'default';
  }
  res.json(quizService.generateQuiz(500, verbSet));
});

module.exports = router;
