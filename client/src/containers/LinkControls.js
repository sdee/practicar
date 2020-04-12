import { connect } from 'react-redux';
import { nextQuestion, prevQuestion, flipCard } from '../actions';
import Controls from '../components/Controls';

const mapStateToProps = (state, ownProps) => ({
	showAnswer: state.quiz.showAnswer,
	filters: state.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	const {filters} = ownProps;
	return({
		onNextClick: () => {
			dispatch(nextQuestion(filters));
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
