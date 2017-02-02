const conjugate = require('./conjugation');
const verbs = require('../data/verbs.json');
const pronouns = require('../data/pronouns.json');
const tenses = require('../data/tenses.json');
const modeMap = require('../data/mode-map.json');
const irregularVerbs = require('../data/irregular-verbs.json');

const FILTER_ALL = 1;
const FILTER_NONE = 2;
const FILTER_BYCASE = 3;

function chooseRandom(data) {
	return data[Math.floor(Math.random() * data.length)];
}

function chooseVerb() {
	return chooseRandom(verbs);
}

function choosePronoun() {
	return chooseRandom(pronouns);
}

function chooseTense() {
	return chooseRandom(tenses);
}

function generateKey(pronoun, tense) {
	return pronoun.code + tense.abbr;
}

function getMode(tense) {
	return modeMap[tense.name];
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

function isReflexive(verb) {
	return verb.endsWith('se');
}

function generateConjugation() {
	const pronoun = choosePronoun();
	const verb = chooseVerb();
	const tense = chooseTense();
	const reflexive = isReflexive(verb);
	const question = {
		pronoun: pronoun.name,
		verb: verb,
		tense: tense.name
	};
	question.mode = getMode(tense);
	question.isIrregular = isIrregular(verb,
		pronoun, tense, FILTER_BYCASE);
	question.isReflexive = isReflexive(verb);
	const key = generateKey(pronoun, tense);
	const conjugation = conjugate(verb);
	if (conjugation) {
		const answer = conjugation[key];
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
		// check uniqueness
		if (question) {
			quiz.questions.push(question);
		}
	}
	return quiz;
}

module.exports.generateQuiz = generateQuiz;
