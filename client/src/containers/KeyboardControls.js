import { connect } from 'react-redux';
import { nextQuestion, prevQuestion, flipCard, toggleFocus } from '../actions';
import KeyboardListener from '../components/KeyboardListener';

const mapStateToProps = (state, ownProps) => ({
	cn: ownProps.children
});

const mapDispatchToProps = (dispatch, ownProps) => 
{
	const {filters} = ownProps;
return({
	onRightKeyClick: (e) => {
		e.preventDefault();
		dispatch(nextQuestion(filters));
	},
	onLeftKeyClick: (e) => {
		e.preventDefault();
		dispatch(prevQuestion(filters));
	},
	onUpKeyClick: (e) => {
		e.preventDefault();
		dispatch(flipCard());
	},
	onSpaceBarClick: (e) => {
		e.preventDefault();
		dispatch(toggleFocus());
	}
})};

const KeyboardControls = connect(
	mapStateToProps,
	mapDispatchToProps
)(KeyboardListener);

export default KeyboardControls;
