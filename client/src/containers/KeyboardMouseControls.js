import {nextQuestion, showAnswer} from '../actions';
import KeyboardMouseListener from '../components/KeyboardMouseListener';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onNextClick: () => {
		dispatch(nextQuestion());
	},
	onShowClick: () => {
		dispatch(showAnswer());
	}
});

const KeyboardMouseControls = connect(
	mapStateToProps,
	mapDispatchToProps
)(KeyboardMouseListener);

export default KeyboardMouseControls;