/*
 * action types
 */
export const SET_FILTER = 'SET_FILTER';

export const NEXT_QUESTION = 'NEXT_QUESTION';
export const PREV_QUESTION = 'PREV_QUESTION';
export const FLIP_CARD = 'FLIP_CARD';

export const LOAD_QUIZ = 'LOAD_QUIZ';
export const LOAD_QUIZ_SUCCESS = 'LOAD_QUIZ_SUCCESS';
export const LOAD_QUIZ_ERROR = 'LOAD_QUIZ_ERROR';

export const SET_VERBSET = 'SET_VERBSET';

export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';

export const TOGGLE_FOCUS = 'TOGGLE_FOCUS';

/*
 * action creators
 */
export function setFilter(filter, status) {
	return { type: SET_FILTER, filter, status };
}

export function nextQuestion() {
	return { type: NEXT_QUESTION };
}

export function prevQuestion() {
	return { type: PREV_QUESTION };
}

export function flipCard() {
	return { type: FLIP_CARD };
}

export function submitAnswer(userAnswer, ignoreAccents) {
	return { type: SUBMIT_ANSWER, userAnswer, ignoreAccents };
}

export function loadQuizError(error) {
	return { error, type: LOAD_QUIZ_ERROR };
}

export function loadQuizSuccess(quiz) {
	return (dispatch) => {
		dispatch({ type: LOAD_QUIZ_SUCCESS, quiz });
	};
}

export function loadQuizRequest() {
	return { type: LOAD_QUIZ };
}

export function setVerbSet(verbSet) {
	return { type: SET_VERBSET, verbSet };
}

export function loadQuiz(verbSet = 'topHundred') {
	const url = 'api/quiz?verbs=' + verbSet;
	return (dispatch) => {
		fetch(url, {
			accept: 'application/json',
		})
		.then(response => response.json())
		.then(json => dispatch(loadQuizSuccess(json)))
		.catch((error) => { console.log('request failed', error); });
	};
}

export function toggleFocus() {
	console.log("toggleFocus");
	return { type: TOGGLE_FOCUS };
}
