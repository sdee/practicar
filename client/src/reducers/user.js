import { NEXT_QUESTION } from '../actions';

const user = (state = { questionNo: 0 }, action) => {
	switch (action.type) {
  case NEXT_QUESTION: {
    return {
      questionNo: state.questionNo+1
    };
  }
	default:
		return state;
	}
};

export default user;
