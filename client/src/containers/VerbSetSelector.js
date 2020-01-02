import { connect } from 'react-redux';
import VerbSetRadioButtons from '../components/VerbSetRadioButtons';
import { setVerbSet, loadQuiz } from '../actions';

const mapStateToProps = (state, ownProps) => ({
	currVerbSet: state.quiz.verbSet
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onSelect: (e) => {
		dispatch(setVerbSet(e.target.value));
		dispatch(loadQuiz(e.target.value));
	}
});

const VerbSetSelector = connect(
	mapStateToProps,
	mapDispatchToProps
)(VerbSetRadioButtons);

export default VerbSetSelector;
