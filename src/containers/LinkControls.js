import { connect } from 'react-redux';
import { nextQuestion, showAnswer } from '../actions';
import Controls from '../components/Controls';

const mapStateToProps = (state, ownProps) => ({
	// active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onNextClick: () => {
		dispatch(nextQuestion());
	},
	onShowClick: () => {
		dispatch(showAnswer());
	}
});

const LinkControls = connect(
	mapStateToProps,
	mapDispatchToProps
)(Controls);

export default LinkControls;
