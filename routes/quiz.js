var express = require('express');
var router = express.Router();
const quizService = require('../services/quiz');
const numbersService = require('../services/numbersQuiz')

router.get('/number', function(req, res, next) {
  res.json({'key': 'hello'})
});

router.get('/', function(req, res, next) {
  const type = req.query.type;
  
  if (type==='numbers') {
    res.json(numbersService.generateQuiz());
  }
  else{
    // let verbSet = req.query.verbs;
    let verbSet=null;
    if (!verbSet) {
      verbSet = 'default';
    }
    res.json(quizService.generateQuiz(500, verbSet));
  }

});



module.exports = router;
