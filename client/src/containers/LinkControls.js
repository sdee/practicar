import { connect } from 'react-redux';
import { nextQuestion, prevQuestion, flipCard, endSession, startSession } from '../actions';
import Controls from '../components/Controls';
import {getIsLastQuestion, getIsFirstQuestion} from '../selectors/currentSession';

const mapStateToProps = (state, ownProps) => ({
	showAnswer: state.quiz.showAnswer,
	filters: state.filter,
	session: { ... state.currentSession, isFirstQuestionInSession: getIsFirstQuestion(state)},
});

const mapDispatchToProps = (dispatch, ownProps) => {
	console.log(ownProps);
	const { filters, session: { isSessionOver, isLastQuestionInSession }} = ownProps;

	return({
		onNextClick: () => {
			if (isSessionOver) {
				dispatch(startSession());
				dispatch(nextQuestion(filters));
			}
			else if (isLastQuestionInSession === true) {
				dispatch(endSession());
			}
		
			else {
				dispatch(nextQuestion(filters));
			}
		},
		onPrevClick: () => {
			dispatch(prevQuestion(filters));
		},
		onShowClick: () => {
			dispatch(flipCard());
		}
	});
};

const LinkControls = connect(
	mapStateToProps,
	mapDispatchToProps
)(Controls);

export default LinkControls;
