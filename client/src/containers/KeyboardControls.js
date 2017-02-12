import {nextQuestion, showAnswer} from '../actions';
import KeyboardListener from '../components/KeyboardListener';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	return {
		cn: ownProps.children
	}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	onNextClick: () => {
		dispatch(nextQuestion());
	},
	onShowClick: () => {
		dispatch(showAnswer());
	}
});

const KeyboardControls = connect(
	mapStateToProps,
	mapDispatchToProps
)(KeyboardListener);

export default KeyboardControls;