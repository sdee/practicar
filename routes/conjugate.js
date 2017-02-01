var express = require('express');
var router = express.Router();
const conjugate = require('../services/conjugation');

router.get('/:verb', function(req, res, next) {
  const verb = req.params.verb;
  res.json(conjugate(verb));
});

module.exports = router;
