import { connect } from 'react-redux';
import { nextQuestion, flipCard } from '../actions';
import Controls from '../components/Controls';

const mapStateToProps = (state, ownProps) => ({
	showAnswer: state.quiz.showAnswer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onNextClick: () => {
		dispatch(nextQuestion());
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
