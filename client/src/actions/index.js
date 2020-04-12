/*
 * action types
 */
export const SET_FILTER = 'SET_FILTER';
export const SET_FILTERS = 'SET_FILTERS';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const PREV_QUESTION = 'PREV_QUESTION';
export const FLIP_CARD = 'FLIP_CARD';

export const SWITCH_QUIZ = 'SWITCH_QUIZ';
export const LOAD_QUIZ = 'LOAD_QUIZ';
export const LOAD_QUIZ_SUCCESS = 'LOAD_QUIZ_SUCCESS';
export const LOAD_QUIZ_ERROR = 'LOAD_QUIZ_ERROR';

export const SET_VERBSET = 'SET_VERBSET';

export const SET_SESSION_LENGTH = 'SET_SESSION_LENGTH';

export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';

export const TOGGLE_FOCUS = 'TOGGLE_FOCUS';

export const START_SESSION = 'START_SESSION'

/*
 * action creators
 */
export function setFilter(filter, status) {
	return { type: SET_FILTER, filter, status };
}

export function setFilters(filters) {
	return { type: SET_FILTERS, filters };
}

export function nextQuestion(filters) {
	return { type: NEXT_QUESTION, filters };
}

export function prevQuestion(filters) {
	return { type: PREV_QUESTION, filters };
}

export function flipCard() {
	return { type: FLIP_CARD };
}

export function submitAnswer(userAnswer, ignoreAccents) {
	return { type: SUBMIT_ANSWER, userAnswer, ignoreAccents };
}

export function loadQuizError(error) {
	return { type: LOAD_QUIZ_ERROR, error };
}

export function loadQuizSuccess(quiz, quizType) {
	return { type: LOAD_QUIZ_SUCCESS, quiz, quizType };
}

export function loadQuizRequest() {
	return { type: LOAD_QUIZ };
}

export function setVerbSet(verbSet) {
	return (dispatch) => {
		dispatch({ type: SET_VERBSET, verbSet })
		dispatch(loadQuizWithParameters('verbs', {verbSet}));
	};
}

export function switchQuiz(quizType) {
	return (dispatch) => {
		dispatch({ type: SWITCH_QUIZ, quizType });
		dispatch(loadQuizWithParameters(quizType));
	};
}

export function loadQuizWithParameters(quizType, params ) {
	return (dispatch) => {
		let url;
		if (quizType === 'numbers') {
			if (params && params.MIN_NUMBER !== undefined && params.MAX_NUMBER !== undefined) {
				url = `api/quiz?type=numbers&min=${params.MIN_NUMBER}&max=${params.MAX_NUMBER}`;
			} else {
				url = "api/quiz?type=numbers";
			}
		} else {
			if (params && params.verbSet !== undefined) {
				url = `api/quiz?type=verbs&verbs=${params.verbSet}`;
			} else {
				const verbSet='topHundred';
				url = `api/quiz?type=verbs&verbs=${verbSet}`;
			}
		}
		fetch(url, {
			accept: 'application/json',
		})
		.then(response => response.json())
		.then(json => dispatch(loadQuizSuccess(json, quizType)))
		.catch((error) => {
			console.error('request failed', error);
		});
	};
}

export function setSessionLength(sessionLength) {
	return (dispatch) => {
		dispatch({type: SET_SESSION_LENGTH, sessionLength});
		dispatch({type: START_SESSION, sessionLength})
	}
}

export function startSession(sessionLength) {
	return (dispatch) => {
		dispatch({type: SET_SESSION_LENGTH, sessionLength})
	}
}

export function toggleFocus() {
	return { type: TOGGLE_FOCUS };
}
