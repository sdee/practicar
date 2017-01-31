import { NEXT_QUESTION, SHOW_ANSWER, LOAD_QUIZ, SUBMIT_ANSWER } from '../actions';

// TODO: remove, only for testing
const tempQuiz = [
	{
		irregular: false,
		pronoun: 'yo',
		infinitive: 'hablar',
		tense: 'future',
		mode: 'indicative',
		answer: 'hablaré'
	},
	{
		irregular: false,
		pronoun: 'tu',
		infinitive: 'llamar',
		tense: 'imperfect',
		mode: 'indicative',
		answer: 'llamabas'
	},
	{
		irregular: false,
		pronoun: 'nosotros',
		infinitive: 'hablar',
		tense: 'present',
		mode: 'indicative',
		answer: 'hablamos'
	},
	{
		irregular: false,
		pronoun: 'ellos',
		infinitive: 'hablar',
		tense: 'present',
		mode: 'indicative',
		answer: 'hablan'
	}
];
let tempIndex = -1;

// TODO: move this
function accentsTidy(s) {
	let r = s.toLowerCase();
	r = r.replace(new RegExp('\\s', 'g'), '');
	r = r.replace(new RegExp('[àáâãäå]', 'g'), 'a');
	r = r.replace(new RegExp('æ', 'g'), 'ae');
	r = r.replace(new RegExp('ç', 'g'), 'c');
	r = r.replace(new RegExp('[èéêë]', 'g'), 'e');
	r = r.replace(new RegExp('[ìíîï]', 'g'), 'i');
	r = r.replace(new RegExp('ñ', 'g'), 'n');
	r = r.replace(new RegExp('[òóôõö]', 'g'), 'o');
	r = r.replace(new RegExp('œ', 'g'), 'oe');
	r = r.replace(new RegExp('[ùúûü]', 'g'), 'u');
	r = r.replace(new RegExp('[ýÿ]', 'g'), 'y');
	r = r.replace(new RegExp('\\W', 'g'), '');
	return r;
}

function getFinalUserAnswer(userAnswer, ignoreAccents) {
	const finalUserAnswer = ignoreAccents ? accentsTidy(userAnswer.trim()) : userAnswer.trim();
	return finalUserAnswer;
}

function getFinalCorrectAnswer(correctAnswer, ignoreAccents) {
	const finalCorrectAnswer = ignoreAccents ? accentsTidy(correctAnswer) : correctAnswer;
	return finalCorrectAnswer;
}

function checkUserAnswer(finalUserAnswer, finalCorrectAnswer) {
	return finalUserAnswer === finalCorrectAnswer;
}

const quiz = (state = {
	ignoreAccents: false,
	correctAnswer: '',
	infinitive: '',
	tense: '',
	pronoun: '',
	text: 'Get started by clicking \'next question\'!',
	submittedAnswer: '',
	showAnswer: false,
	isCorrect: false,
	hasSubmittedAnswer: false }, action) => {
	switch (action.type) {
	case NEXT_QUESTION: {
		tempIndex++;
		if (tempIndex > tempQuiz.length) {
			tempIndex = 0;
		}
		const question = tempQuiz[tempIndex];
		console.log('NEXT_QUESTION');
		return Object.assign({}, state, {
			hasSubmittedAnswer: false,
			submittedAnswer: '',
			isCorrect: false,
			showAnswer: false,
			irregular: question.irregular,
			pronoun: question.pronoun,
			infinitive: question.infinitive,
			tense: question.tense,
			mode: question.mode,
			correctAnswer: question.answer
		});
	}
	case SHOW_ANSWER: {
		console.log('SHOW_ANSWER');
		return Object.assign({}, state, { showAnswer: true });
	}
	case LOAD_QUIZ: {
		console.log('LOAD_QUIZ');
		return state;
	}
	case SUBMIT_ANSWER: {
		console.log(`userAnswer: ${action.userAnswer} ignoreAccents: ${action.ignoreAccents}`);
		const finalUserAnswer = getFinalUserAnswer(action.userAnswer, action.ignoreAccents);
		const finalCorrectAnswer = getFinalCorrectAnswer(state.correctAnswer, action.ignoreAccents);
		return Object.assign({}, state, {
			ignoreAccents: action.ignoreAccents,
			hasSubmittedAnswer: true,
			submittedAnswer: action.userAnswer,
			finalAnswer: finalUserAnswer,
			isCorrect: checkUserAnswer(finalUserAnswer, finalCorrectAnswer)
		});
	}
	default: {
		return state;
	}
	}
};

export default quiz;
