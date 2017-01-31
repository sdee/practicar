import { NEXT_QUESTION, SHOW_ANSWER, LOAD_QUIZ } from '../actions';

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

const quiz = (state = {
	answer: '',
	infinitive: '',
	tense: '',
	pronoun: '',
	text: 'Get started by clicking \'next question\'!',
	submittedAnswer: false,
	showAnswer: false,
	correct: false,
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
			showAnswer: false,
			irregular: question.irregular,
			pronoun: question.pronoun,
			infinitive: question.infinitive,
			tense: question.tense,
			mode: question.mode,
			answer: question.answer
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
	default: {
		return state;
	}
	}
};

export default quiz;
