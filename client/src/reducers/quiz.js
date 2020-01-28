import { NEXT_QUESTION, PREV_QUESTION, FLIP_CARD, SUBMIT_ANSWER, LOAD_QUIZ,
	LOAD_QUIZ_SUCCESS, LOAD_QUIZ_ERROR, SET_FILTER, TOGGLE_FOCUS, SET_VERBSET } from '../actions';

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
	return finalUserAnswer.toLowerCase() === finalCorrectAnswer.toLowerCase();
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

function doesPronounPassFilter(state, question) {
	if (!state.ALLOW_IRREGULAR && question.isIrregular) {
		return false;
	}

	if (!state.ALLOW_PRONOUN_YO && question.pronoun === 'yo') {
		return false;
	}

	if (!state.ALLOW_PRONOUN_TU && question.pronoun === 'tú') {
		return false;
	}

	if (!state.ALLOW_PRONOUN_EL && question.pronoun === 'él') {
		return false;
	}

	if (!state.ALLOW_PRONOUN_NOSOTROS && question.pronoun === 'nosotros') {
		return false;
	}

	if (!state.ALLOW_PRONOUN_VOSOTROS && question.pronoun === 'vosotros') {
		return false;
	}

	if (!state.ALLOW_PRONOUN_ELLOS && question.pronoun === 'ellos') {
		return false;
	}
	return true;
}

function doesQuestionPassFilter(state, question, quizType) {
	if (!question) {
		return false;
	}

	if (quizType==='numbers'){
		return true
	}

	if (!doesPronounPassFilter(state, question)) {
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
	text: '',
	submittedAnswer: '',
	showAnswer: false,
	isCorrect: false,
	hasSubmittedAnswer: false,
	questionSequence: [],
	sequenceIndex: -1,
	// filters
	ALLOW_PRESENT_IND: true,
	ALLOW_PRONOUN_YO: true,
	ALLOW_PRONOUN_TU: true,
	ALLOW_PRONOUN_EL: true,
	ALLOW_PRONOUN_NOSOTROS: true,
	ALLOW_PRONOUN_ELLOS: true,
	focus: 'card',
	verbSet: 'topHundred',
	type: '',
	currentCard: {}
};

const quiz = (state = initialState, action) => {
	switch (action.type) {

	case NEXT_QUESTION: {
		const {questions} = state;
		if (questions.length === 0) {
			console.error('cannot fetch next question, questions not loaded');
			return state;
		}
		const quizType = state.type;
		let newSequenceIndex;
		let newQuestionIndex;
		let newQuestionSequence = state.questionSequence;
		let card;
		let question;
		if (state.sequenceIndex < state.questionSequence.length - 1) {
			// on an old question, just move forward
			newSequenceIndex = state.sequenceIndex + 1;
			newQuestionIndex = state.questionSequence[newSequenceIndex];
			card = questions[newQuestionIndex];
			question = card.question;
		} else {
			// select new question
			// TODO: do this somewhere better, not in reducer
			newQuestionIndex = state.questionIndex;
			let numAttempts = 0;
			// keep on creating new question until question pass current filters
			while (!doesQuestionPassFilter(state, question, quizType)) {
				newQuestionIndex++;
				if (newQuestionIndex >= questions.length) {
					newQuestionIndex = 0;
				}
				card = questions[newQuestionIndex]
				question = card.question;
				numAttempts++;
				if (numAttempts > questions.length) {
					console.error('unable to generate a question with present filters');
					return state;
				}
			}
			newQuestionSequence = [...state.questionSequence, newQuestionIndex];
			newSequenceIndex = state.sequenceIndex + 1;
		}
		return {
			...state,
			questionIndex: newQuestionIndex,
			hasSubmittedAnswer: false,
			submittedAnswer: '',
			isCorrect: false,
			showAnswer: false,
			questionSequence: newQuestionSequence,
			sequenceIndex: newSequenceIndex,
			currentCard: card,
			focus: 'userAnswer',
		};
	}
	case PREV_QUESTION: {
		let card;
		if (state.sequenceIndex > 0) {
			const {questions} = state;
			const newSequenceIndex = state.sequenceIndex - 1;
			const newQuestionIndex = state.questionSequence[newSequenceIndex];
			card = questions[newQuestionIndex];

			return {
				...state,
				questionIndex: newQuestionIndex,
				hasSubmittedAnswer: false,
				submittedAnswer: '',
				isCorrect: false,
				showAnswer: false,
				questionSequence: state.questionSequence,
				sequenceIndex: newSequenceIndex,
				currentCard: card,
				focus: 'userAnswer'
			};
		}
		return state;
	}
	case FLIP_CARD: {
		return {
			...state,
			showAnswer: !state.showAnswer,
			hasSubmittedAnswer: false
		};
	}
	case LOAD_QUIZ: {
		return {
			...state, isLoadingQuiz: true,
			isQuizLoaded: false,
		};
	}
	case LOAD_QUIZ_SUCCESS: {
		let text;
		const type = action.quizType;
		if (type==='numbers'){
			text='Let\'s learn our numbers in Spanish! Get started by clicking \'next\''
		}
		else if (type==='verbs'){
			text='Let\'s learn some Spanish verb conjugations! Get started by clicking \'next\''
		}
		return {
			...state, questions: action.quiz.questions,
			type,
			currentQuestionIndex: -1,
			isLoadingQuiz: false,
			isQuizLoaded: true,
			text
		};
	}
	case SET_VERBSET: {
		return {
			...state,
			verbSet: action.verbSet
		};
	}
	case LOAD_QUIZ_ERROR: {
		return {
			...state,
			isLoadingQuiz: false,
			isQuizLoaded: false,
		};
	}
	case SUBMIT_ANSWER: {
		console.log(`userAnswer: ${action.userAnswer} ignoreAccents: ${action.ignoreAccents}`);
		const finalUserAnswer = getFinalUserAnswer(action.userAnswer, action.ignoreAccents);
		const finalCorrectAnswer = getFinalCorrectAnswer(state.currentCard.answer, action.ignoreAccents);
		return {
			...state,
			ignoreAccents: action.ignoreAccents,
			hasSubmittedAnswer: true,
			submittedAnswer: action.userAnswer,
			finalAnswer: finalUserAnswer,
			isCorrect: checkUserAnswer(finalUserAnswer, finalCorrectAnswer),
			showAnswer: true
		};
	}
	case SET_FILTER: {
		const newState = {
			...state,
		};
		newState[action.filter] = action.status;
		return newState;
	}
	case TOGGLE_FOCUS: {
		const newState = {
			...state,
		};
		if (state.focus === 'card') {
			newState.focus = 'userAnswer';
		} else if (state.focus === 'userAnswer') {
			newState.focus = 'card';
		}
		return newState;
	}
	default: {
		return state;
	}
	}
};

export default quiz;
