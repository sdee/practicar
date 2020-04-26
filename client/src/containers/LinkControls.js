import { connect } from 'react-redux';
import { nextQuestion, prevQuestion, flipCard, endSession } from '../actions';
import Controls from '../components/Controls';

const mapStateToProps = (state, ownProps) => ({
	showAnswer: state.quiz.showAnswer,
	filters: state.filter,
	isLastQuestion: state.currentSession.isLastQuestion,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	const {filters, isLastQuestion} = ownProps;
	console.log('!!!!')
	console.log(ownProps);
	console.log(isLastQuestion);

	return({
		onNextClick: () => {
			if (isLastQuestion === true) {
				console.log('LASTQUESTION');
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
