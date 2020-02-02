import { SET_FILTER, SET_FILTERS, LOAD_QUIZ_SUCCESS } from '../actions';

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
			const newState = Object.assign({}, state, {});
			newState[action.filter] = action.status;
			return newState;
		}
		case SET_FILTERS: {
			const newState = Object.assign({}, state, {});
			const filters = action.filters;
			Object.entries(filters).forEach(entry => {
				const [key, value] = entry;
				newState[key] = value;
			  });
			return newState;
		}
		case LOAD_QUIZ_SUCCESS: {
			const quizType = action.quizType;
			let newState;
			if (Object.entries(state).length === 0){
				if (quizType === 'numbers') {
					newState = initialNumbersState;
				}
				else {
					newState = initialVerbsState;
				}
			}
			else {
				return state;
			}
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default filter;
