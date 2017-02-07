const _ = require('underscore');
const diff = require('fast-diff');
const conjugate = require('./conjugation');
const utils = require('./spanish-utils');
const verbs = require('../data/verbs.json');
const pronouns = require('../data/pronouns.json');
const tenses = require('../data/tenses.json');
const moods = require('../data/moods.json');
const irregularVerbs = require('../data/irregular-verbs.json');

const FILTER_ALL = 1;
const FILTER_NONE = 2;
const FILTER_BYCASE = 3;

function chooseRandom(data) {
	return data[Math.floor(Math.random() * data.length)];
}

function chooseMood() {
	return chooseRandom(moods);
}

function getTenseByName(name) {
	let correctTense = {};
	tenses.forEach(function (tense) {
		if (tense.name === name) {
			correctTense = tense;
		}
	});
	return correctTense
}

function chooseTense(mood) {
	const tenseName = chooseRandom(mood.tenses);
	tense = getTenseByName(tenseName);
	return tense;
}

function chooseVerb() {
	return chooseRandom(verbs);
}

function choosePronoun() {
	return chooseRandom(pronouns);
}

function generateKey(pronoun, tense) {
	return pronoun.code + tense.abbr;
}

function isIrregular(verb, pronoun, tense, filter) {
	if (filter === FILTER_NONE) {
		return isIrregularEver(verb);
	} else if (filter === FILTER_BYCASE) {
		return isIrregularHere(verb, pronoun, tense);
	}
	return false;
}

// simple filter than eliminates verbs that are irregular in any tense
function isIrregularEver(verb) {
	if (irregularVerbs[verb]) {
		return true;
	}
	return false;
}

// filters irregularity of verb for a specific case-combination of pronoun and tense
function isIrregularHere(verb, pronoun, tense) {
	const key = generateKey(pronoun, tense);
	const irregularVerb = irregularVerbs[verb];
	if (irregularVerb) {
		if (irregularVerb[key]) {
			return true;
		}
	}
	return false;
}

function findIrregularity(verb, pronoun, tense, answer) {
	const key = generateKey(pronoun, tense);
	c = utils.conjugate2(verb);
	var differences = diff(answer, c[key]);
	var irregularity = _.find(differences, function(x) {return x[0] === -1;});
	if (irregularity) {
		return irregularity[1];
	}
	else {
		return '';
	}
}

function isReflexive(verb) {
	return verb.endsWith('se');
}

function generateConjugation() {
	const mood = chooseMood();
	const tense = chooseTense(mood);
	const pronoun = choosePronoun();
	const verb = chooseVerb();
	const reflexive = isReflexive(verb);
	const question = {
		pronoun: pronoun.name,
		verb: verb,
		mood: mood.name,
		tense: tense.name
	};

	question.isIrregular = isIrregular(verb, pronoun, tense, FILTER_BYCASE);
	question.isReflexive = isReflexive(verb);
	const key = generateKey(pronoun, tense);
	const conjugation = conjugate(verb);
	if (conjugation) {
		const answer = conjugation[key];
		if (question.isIrregular) {
			question.irregularity = findIrregularity(verb, pronoun, tense, answer);
		}
		else{
			question.irregularity = '';
		}
		return {
			question: question,
			answer: answer
		};
	}
	return null;
}

function generateQuiz(numQuestions=100) {
	const quiz = {
		questions: []
	};
	while (quiz.questions.length < numQuestions) {
		const question = generateConjugation();
		// TODO: check uniqueness
		if (question) {
			quiz.questions.push(question);
		}
	}
	return quiz;
}

module.exports.generateQuiz = generateQuiz;
