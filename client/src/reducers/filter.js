import { SET_FILTER, LOAD_QUIZ } from '../actions';

const initialState = {
	ALLOW_PRESENT_IND: true,
	ALLOW_PRONOUN_YO: true,
	ALLOW_PRONOUN_TU: true,
	ALLOW_PRONOUN_NOSOTROS: true,
	ALLOW_PRONOUN_EL: true,
	ALLOW_PRONOUN_ELLOS: true
};
const filter = (state = initialState, action) => {
	switch (action.type) {
	case SET_FILTER: {
		const newState = Object.assign({}, state, {});
		newState[action.filter] = action.status;
		return newState;
	}
	case LOAD_QUIZ: {
		const newState = {};
		return newState;
	}
	default: {
		return state;
	}
	}
};

export default filter;
