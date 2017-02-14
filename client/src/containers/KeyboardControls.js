import { connect } from 'react-redux';
import { nextQuestion, prevQuestion, flipCard } from '../actions';
import KeyboardListener from '../components/KeyboardListener';

const mapStateToProps = (state, ownProps) => ({
	cn: ownProps.children
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onRightKeyClick: (e) => {
		e.preventDefault();
		dispatch(nextQuestion());
	},
	onLeftKeyClick: (e) => {
		e.preventDefault();
		dispatch(prevQuestion());
	},
	onUpKeyClick: (e) => {
		e.preventDefault();
		dispatch(flipCard());
	}
});

const KeyboardControls = connect(
	mapStateToProps,
	mapDispatchToProps
)(KeyboardListener);

export default KeyboardControls;
