import { connect } from 'react-redux';
import { nextQuestion, prevQuestion, flipCard } from '../actions';
import Controls from '../components/Controls';

const mapStateToProps = (state, ownProps) => ({
	showAnswer: state.quiz.showAnswer,
	filters: state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onNextClick: () => {
		dispatch(nextQuestion(ownProps.filters));
	},
	onPrevClick: () => {
		dispatch(prevQuestion());
	},
	onShowClick: () => {
		dispatch(flipCard());
	}
});

const LinkControls = connect(
	mapStateToProps,
	mapDispatchToProps
)(Controls);

export default LinkControls;
