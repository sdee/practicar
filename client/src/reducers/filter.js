import { SET_FILTER } from '../actions';

const filter = (state = {}, action) => {
	switch (action.type) {
	case SET_FILTER: {
		const newState = Object.assign({}, state, {});
		newState[action.filter] = action.status;
		return state;
	}
	default: {
		return state;
	}
	}
};

export default filter;
