import { NEXT_QUESTION, SHOW_ANSWER, SUBMIT_ANSWER, LOAD_QUIZ, LOAD_QUIZ_SUCCESS, LOAD_QUIZ_ERROR } from '../actions';

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

const initialState = {
	currentQuestionIndex: -1,
	questions: [],
	ignoreAccents: false,
	correctAnswer: '',
	infinitive: '',
	tense: '',
	pronoun: '',
	text: 'Get started by clicking \'next question\'!',
	submittedAnswer: '',
	showAnswer: false,
	isCorrect: false,
	hasSubmittedAnswer: false
};

const quiz = (state = initialState, action) => {
	switch (action.type) {
	case NEXT_QUESTION: {
		let currQuestion = state.currentQuestionIndex + 1;
		const questions = state.questions;
		if (currQuestion > questions.length) {
			currQuestion = 0;
		}
		const question = questions[currQuestion].question;
		const answer = questions[currQuestion].answer;
		console.log('NEXT_QUESTION');
		return Object.assign({}, state, {
			currentQuestionIndex: currQuestion,
			hasSubmittedAnswer: false,
			submittedAnswer: '',
			isCorrect: false,
			showAnswer: false,
			irregular: question.isIrregular,
			pronoun: question.pronoun,
			infinitive: question.verb,
			tense: question.tense,
			mode: question.mode,
			correctAnswer: answer
		});
	}
	case SHOW_ANSWER: {
		console.log('SHOW_ANSWER');
		return Object.assign({}, state, { showAnswer: true });
	}
	case LOAD_QUIZ: {
		console.log('LOAD_QUIZ');
		return Object.assign({}, state, {
			isLoadingQuiz: true,
			isQuizLoaded: false,
		});
	}
	case LOAD_QUIZ_SUCCESS: {
		console.log('LOAD_QUIZ_SUCCESS');
		return Object.assign({}, state, {
			questions: action.quiz.questions,
			currentQuestionIndex: -1,
			isLoadingQuiz: false,
			isQuizLoaded: true,
		});
	}
	case LOAD_QUIZ_ERROR: {
		console.log('LOAD_QUIZ_ERROR');
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
			isCorrect: checkUserAnswer(finalUserAnswer, finalCorrectAnswer)
		});
	}
	default: {
		return state;
	}
	}
};

export default quiz;
