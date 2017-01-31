/*
 * action types
 */
export const SET_FILTER = 'SET_FILTER';

export const NEXT_QUESTION = 'NEXT_QUESTION';
export const SHOW_ANSWER = 'SHOW_ANSWER';
export const LOAD_QUIZ = 'LOAD_QUIZ';

// LOAD_QUIZ_SUCCESS
// LOAD_QUIZ_FAIL

export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';

/*
 * other constants
 */
export const Filters = {
	SET_REPEATS: 'SET_REPEATS',
	SET_VOSOTROS: 'SET_VOSOTROS',
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
export function setFilter(filter) {
	return { type: SET_FILTER, filter };
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
