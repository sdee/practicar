import { connect } from 'react-redux';
import { nextQuestion, showAnswer } from '../actions';
import KeyboardListener from '../components/KeyboardListener';

const mapStateToProps = (state, ownProps) => {
	return {
		cn: ownProps.children
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	onNextClick: (e) => {
		e.preventDefault();
		dispatch(nextQuestion());
	},
	onShowClick: (e) => {
		e.preventDefault();
		dispatch(showAnswer());
	}
});

const KeyboardControls = connect(
	mapStateToProps,
	mapDispatchToProps
)(KeyboardListener);

export default KeyboardControls;
