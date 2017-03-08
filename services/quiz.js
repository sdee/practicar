const _ = require('underscore');
const diff = require('fast-diff');
const conjugate = require('./conjugation');
const utils = require('./spanish-utils');
const verbs = require('../data/verbs.json');
const topTwentyVerbs = require('../data/verbs-top-twenty.json');
const topHundredVerbs = require('../data/verbs-top-hundred.json');
const thousandPlus = require('../data/verbs-thousand-plus.json');
const pronouns = require('../data/pronouns.json');
const moodsTenses = require('../data/moods-tenses.json');
const irregularVerbs = require('../data/irregular-verbs.json');

const FILTER_ALL = 1;
const FILTER_NONE = 2;
const FILTER_BYCASE = 3;

const verbSets = {
	default: verbs,
	topTwenty: topTwentyVerbs,
	topHundred: topHundredVerbs,
	thousandPlus: thousandPlus
}

function getByName(all, name) {
	return _.findWhere(all, { name: name });
}

function chooseRandom(data) {
	return data[Math.floor(Math.random() * data.length)];
}

function chooseMoodTense() {
	return chooseRandom(moodsTenses);
}

function chooseVerb(verbs) {
	return chooseRandom(verbs);
}

function choosePronoun() {
	return chooseRandom(pronouns);
}

function generateKey(pronoun, moodTense) {
	return pronoun.code + moodTense.code;
}

function generateKeyByName(pronounName, tenseName, moodName) {
	const pronoun = getByName(pronouns, pronounName);
	const moodTense = _.findWhere(moodsTenses, { tense: tenseName, mood: moodName })
	if (pronoun && moodTense) {
		return generateKey(pronoun, moodTense);
	}
	return null;
}

function isIrregular(verb, pronoun, moodTense, filter) {
	if (filter === FILTER_NONE) {
		return isIrregularEver(verb);
	} else if (filter === FILTER_BYCASE) {
		return isIrregularHere(verb, pronoun, moodTense);
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
function isIrregularHere(verb, pronoun, moodTense) {
	const key = generateKey(pronoun, moodTense);
	const irregularVerb = irregularVerbs[verb];
	if (irregularVerb) {
		if (irregularVerb[key]) {
			return true;
		}
	}
	return false;
}

function findIrregularity(verb, pronoun, moodTense, answer) {
	const key = generateKey(pronoun, moodTense);
	const c = utils.conjugate2(verb);
	const differences = diff(answer, c[key]);
	const irregularity = _.find(differences, function(x) {return x[0] === -1;});
	if (irregularity) {
		return irregularity[1];
	} else {
		return '';
	}
}

function isReflexive(verb) {
	return verb.endsWith('se');
}

function generateConjugationByName(verb, pronounName, tenseName, moodName) {
	const key = generateKeyByName(pronounName, tenseName, moodName);
	if (key) {
		const conjugation = conjugate(verb);
		if (conjugation) {
			return conjugation[key];
		}
	}
	return null;
}

function generateConjugation(verb, pronoun, moodTense) {
	const key = generateKey(pronoun, moodTense);
	const conjugation = conjugate(verb);
	if (conjugation) {
		return conjugation[key];
	}
	return null;
}

function generateQuestion(verbSet) {
	const moodTense = chooseMoodTense();
	const pronoun = choosePronoun();
	const data = verbSets[verbSet];
	let verbs=[];
	let hasDefinition = false;
	if (data.constructor === Array){
		verbs = data;
	} else {
		verbs = Object.keys(data);
		hasDefinition = true;
	}

	const verb = chooseVerb(verbs);
	const reflexive = isReflexive(verb);
	const question = {
		pronoun: pronoun.name,
		verb: verb,
		definition: hasDefinition ? data[verb] : '',
		mood: moodTense.mood,
		tense: moodTense.tense,
		isReflexive: reflexive,
		isIrregular: isIrregular(verb, pronoun, moodTense, FILTER_BYCASE),
		irregularity: ''
	};

	const answer = generateConjugation(verb, pronoun, moodTense);
	if (answer) {
		if (question.isIrregular) {
			question.irregularity = findIrregularity(verb, pronoun, moodTense, answer);
		}
		return {
			question: question,
			answer: answer
		};
	}
	return null;
}

function generateQuiz(numQuestions=100, verbSet='default') {
	const quiz = {
		questions: []
	};
	while (quiz.questions.length < numQuestions) {
		const question = generateQuestion(verbSet);
		// TODO: check uniqueness
		if (question) {
			quiz.questions.push(question);
		}
	}
	return quiz;
}

module.exports.generateQuiz = generateQuiz;
module.exports.generateConjugationByName = generateConjugationByName;
