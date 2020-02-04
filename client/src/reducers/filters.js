import { SET_FILTER, SET_FILTERS, SWITCH_QUIZ, LOAD_QUIZ_SUCCESS } from '../actions';

const initialVerbsState = {
	ALLOW_PRESENT_IND: true,
	ALLOW_PRONOUN_YO: true,
	ALLOW_PRONOUN_TU: true,
	ALLOW_PRONOUN_NOSOTROS: true,
	ALLOW_PRONOUN_EL: true,
	ALLOW_PRONOUN_ELLOS: true,
};

const initialNumbersState = {
	MAX_NUMBER: 100,
	MIN_NUMBER: 0
};

const filter = (state = {}, action) => {
	switch (action.type) {
		case SET_FILTER: {
			const newState = { ...state };
			newState[action.filter] = action.status;
			return newState;
		}
		case SET_FILTERS: {
			return {
				...state,
				...action.filters,
			};
		}
		case SWITCH_QUIZ: {
			const quizType = action.quizType;
			if (quizType === 'numbers') {
				return initialNumbersState;
			} else {
				return initialVerbsState;
			}
		}
		case LOAD_QUIZ_SUCCESS: {
			const quizType = action.quizType;
			if (quizType === 'numbers') {
				if (state.MAX_NUMBER === undefined) {
					return initialNumbersState;
				}
			} else {
				if (state.ALLOW_PRESENT_IND === undefined) {
					return initialVerbsState;
				}
			}
			return state;
		}
		default: {
			return state;
		}
	}
};

export default filter;
