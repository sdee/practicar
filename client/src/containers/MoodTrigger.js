import { connect } from 'react-redux';
import { nextQuestion, flipCard } from '../actions';
import KeyboardListener from '../components/MoodLink';

const mapStateToProps = (state, ownProps) => {
	return {
		
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	onLinkClick: (e) => {
		dispatch(setFilter());
	}
});

const MoodTrigger = connect(
	mapStateToProps,
	mapDispatchToProps
)(MoodLink);

export default MoodTrigger;
