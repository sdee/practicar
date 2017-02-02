/*
 * action types
 */
export const SET_FILTER = 'SET_FILTER';

export const NEXT_QUESTION = 'NEXT_QUESTION';
export const SHOW_ANSWER = 'SHOW_ANSWER';

export const LOAD_QUIZ = 'LOAD_QUIZ';
export const LOAD_QUIZ_SUCCESS = 'LOAD_QUIZ_SUCCESS';
export const LOAD_QUIZ_ERROR = 'LOAD_QUIZ_ERROR';

export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';

/*
 * other constants
 */
export const Filters = {
	SET_REPEATS: 'SET_REPEATS',
	SET_VOSOTROS: 'SET_VOSOTROS',
	SET_REFLEXIVE: 'SET_REFLEXIVE',
	SET_IRREGULAR: 'SET_IRREGULAR',
	SET_INDICATIVE: 'SET_INDICATIVE',
	SET_PRESENT: 'SET_PRESENT',
	SET_PRETERITE: 'SET_PRETERITE',
	SET_IMPERFECT: 'SET_IMPERFECT',
	SET_CONDITIONAL: 'SET_CONDITIONAL',
	SET_FUTURE: 'SET_FUTURE'
};

/*
 * action creators
 */
export function setFilter(filter, status) {
	return { type: SET_FILTER, filter, status };
}

export function nextQuestion() {
	return { type: NEXT_QUESTION };
}

export function showAnswer() {
	return { type: SHOW_ANSWER };
}

export function submitAnswer(userAnswer, ignoreAccents) {
	return { type: SUBMIT_ANSWER, userAnswer, ignoreAccents };
}

export function loadQuizError(error) {
  return { error, type: LOAD_QUIZ_ERROR };
}

export function loadQuizSuccess(quiz) {
  return dispatch => {
    dispatch({ type: LOAD_QUIZ_SUCCESS, quiz });
  };
}

export function loadQuizRequest() {
  return { type: LOAD_QUIZ };
}

export function loadQuiz() {
	return (dispatch) =>
		fetch(`api/quiz`, {
			accept: 'application/json',
		})
    .then(response => response.json())
    .then(json => dispatch(loadQuizSuccess(json)))
		.catch(error => { console.log('request failed', error); });
}
