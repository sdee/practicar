import { NEXT_QUESTION } from '../actions';

const user = (state = { questionNum: 0 }, action) => {
	switch (action.type) {
	case NEXT_QUESTION: {
		return {
			questionNum: state.questionNum + 1
		};
	}
	default:
		return state;
	}
};

export default user;
