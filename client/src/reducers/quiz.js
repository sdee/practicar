import _ from 'underscore';
import { NEXT_QUESTION, PREV_QUESTION, FLIP_CARD, SUBMIT_ANSWER,
	LOAD_QUIZ, LOAD_QUIZ_SUCCESS, LOAD_QUIZ_ERROR,
	SET_FILTER } from '../actions';

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

function doesVerbPassIndicativeFilters(state, question) {
	if (question.mood !== 'indicative') {
		return false;
	}

	if (!state.ALLOW_PRESENT_IND && question.tense === 'present') {
		return false;
	}
	if (!state.ALLOW_PRETERITE_IND && question.tense === 'preterite') {
		return false;
	}
	if (!state.ALLOW_IMPERFECT_IND && question.tense === 'imperfect') {
		return false;
	}
	if (!state.ALLOW_CONDITIONAL_IND && question.tense === 'conditional') {
		return false;
	}
	if (!state.ALLOW_FUTURE_IND && question.tense === 'future') {
		return false;
	}
	return true;
}

function doesVerbPassSubjFilters(state, question) {
	if (question.mood !== 'subjunctive') {
		return false;
	}
	if (!state.ALLOW_PRESENT_SUBJ && question.tense === 'present') {
		return false;
	}
	if (!state.ALLOW_IMPERFECT_SUBJ && question.tense === 'imperfect') {
		return false;
	}
	if (!state.ALLOW_IMPERFECT_SUBJ && question.tense === 'imperfect2') {
		return false;
	}
	if (!state.ALLOW_FUTURE_SUBJ && question.tense === 'future') {
		return false;
	}
	return true;
}

function doesQuestionPassFilter(state, question) {
	if (!question) {
		return false;
	}
	if (!state.ALLOW_IRREGULAR && question.isIrregular) {
		return false;
	}
	if (!state.ALLOW_VOSOTROS && question.pronoun === 'vosotros') {
		return false;
	}
	if (!state.ALLOW_REFLEXIVE && question.isReflexive) {
		return false;
	}

	if (question.mood === 'indicative' && !doesVerbPassIndicativeFilters(state, question)) {
		return false;
	}

	if (question.mood === 'subjunctive' && !doesVerbPassSubjFilters(state, question)) {
		return false;
	}

	if (!state.ALLOW_REPEATS) {
		// TODO: perform repeat check
	}
	return true;
}

const initialState = {
	questionIndex: -1,
	questions: [],
	ignoreAccents: false,
	correctAnswer: '',
	irregularity: '',
	infinitive: '',
	tense: '',
	mood: '',
	pronoun: '',
	text: 'Get started by clicking \'next question\'!',
	submittedAnswer: '',
	showAnswer: false,
	isCorrect: false,
	hasSubmittedAnswer: false,
	questionSequence: [],
	sequenceIndex: -1,
	ALLOW_PRESENT_IND: true
};

const quiz = (state = initialState, action) => {
	switch (action.type) {
	case NEXT_QUESTION: {
		const questions = state.questions;
		if (questions.length === 0) {
			console.error('cannot fetch next question, questions not loaded');
			return state;
		}
		let newSequenceIndex;
		let newQuestionIndex;
		let newQuestionSequence = state.questionSequence;
		let question;
		let answer;
		if (state.sequenceIndex < state.questionSequence.length - 1) {
			// on and old question, just move forward
			newSequenceIndex = state.sequenceIndex + 1;
			newQuestionIndex = state.questionSequence[newSequenceIndex];
			question = questions[newQuestionIndex].question;
			answer = questions[newQuestionIndex].answer;
		} else {
			// TODO: do this somewhere better, not in reducer
			newQuestionIndex = state.questionIndex;
			let numAttempts = 0;
			while (!doesQuestionPassFilter(state, question)) {
				newQuestionIndex++;
				if (newQuestionIndex >= questions.length) {
					newQuestionIndex = 0;
				}
				question = questions[newQuestionIndex].question;
				numAttempts++;
				if (numAttempts > questions.length) {
					console.error('unable to generate a question with present filters');
					return state;
				}
			}
			answer = questions[newQuestionIndex].answer;
			newQuestionSequence = [...state.questionSequence, newQuestionIndex];
			newSequenceIndex = state.sequenceIndex + 1;
		}
		return Object.assign({}, state, {
			questionIndex: newQuestionIndex,
			hasSubmittedAnswer: false,
			submittedAnswer: '',
			isCorrect: false,
			showAnswer: false,
			isIrregular: question.isIrregular,
			pronoun: question.pronoun,
			infinitive: question.verb,
			tense: question.tense,
			mood: question.mood,
			correctAnswer: answer,
			irregularity: question.irregularity,
			isReflexive: question.isReflexive,
			sequenceIndex: newSequenceIndex,
			questionSequence: newQuestionSequence
		});
	}
	case PREV_QUESTION: {
		if (state.sequenceIndex > 0) {
			const questions = state.questions;
			const newSequenceIndex = state.sequenceIndex - 1;
			const newQuestionIndex = state.questionSequence[newSequenceIndex];
			const question = questions[newQuestionIndex].question;
			const answer = questions[newQuestionIndex].answer;
			return Object.assign({}, state, {
				questionIndex: newQuestionIndex,
				hasSubmittedAnswer: false,
				submittedAnswer: '',
				isCorrect: false,
				showAnswer: false,
				isIrregular: question.isIrregular,
				pronoun: question.pronoun,
				infinitive: question.verb,
				tense: question.tense,
				mood: question.mood,
				correctAnswer: answer,
				irregularity: question.irregularity,
				isReflexive: question.isReflexive,
				sequenceIndex: newSequenceIndex,
				questionSequence: state.questionSequence
			});
		}
		return state;
	}
	case FLIP_CARD: {
		return Object.assign({}, state, {
			showAnswer: !state.showAnswer,
			hasSubmittedAnswer: false
		});
	}
	case LOAD_QUIZ: {
		return Object.assign({}, state, {
			isLoadingQuiz: true,
			isQuizLoaded: false,
		});
	}
	case LOAD_QUIZ_SUCCESS: {
		return Object.assign({}, state, {
			questions: action.quiz.questions,
			currentQuestionIndex: -1,
			isLoadingQuiz: false,
			isQuizLoaded: true,
		});
	}
	case LOAD_QUIZ_ERROR: {
		return Object.assign({}, state, {
			isLoadingQuiz: false,
			isQuizLoaded: false,
		});
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
			isCorrect: checkUserAnswer(finalUserAnswer, finalCorrectAnswer),
			showAnswer: true
		});
	}
	case SET_FILTER: {
		const newState = Object.assign({}, state, {});
		newState[action.filter] = action.status;
		return newState;
	}
	default: {
		return state;
	}
	}
};

export default quiz;
