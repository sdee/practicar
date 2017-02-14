import { NEXT_QUESTION, PREV_QUESTION } from '../actions';

const user = (state = { questionNum: 0 }, action) => {
	switch (action.type) {
	case NEXT_QUESTION: {
		return {
			questionNum: state.questionNum + 1
		};
	}
	case PREV_QUESTION: {
		if (state.questionNum > 1) {
			return {
				questionNum: state.questionNum - 1
			};
		}
		return state;
	}
	default:
		return state;
	}
};

export default user;
