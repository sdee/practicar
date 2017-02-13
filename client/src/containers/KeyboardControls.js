import { connect } from 'react-redux';
import { nextQuestion, flipCard } from '../actions';
import KeyboardListener from '../components/KeyboardListener';

const mapStateToProps = (state, ownProps) => {
	return {
		cn: ownProps.children
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	onRightKeyClick: (e) => {
		e.preventDefault();
		dispatch(nextQuestion());
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
