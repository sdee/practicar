var express = require('express');
var router = express.Router();
const quiz = require('../services/quiz');

router.get('/:verb', function(req, res, next) {
  const verb = req.params.verb;
  const pronoun = req.query.pronoun;
  const tense = req.query.tense;
  let mood = req.query.mood;
  if (verb && pronoun && tense) {
    if (!mood) {
      // mood defaults to indicative when not included
      mood = 'indicative';
    }
    const conj = quiz.generateConjugationByName(verb, pronoun, tense, mood);
    if (conj) {
      return res.json(conj);
    }
    return res.json('unable to conjugate with given parameters');
  }
  return res.json({ error: 'must specific pronoun and tense query parameters' })
});

module.exports = router;
