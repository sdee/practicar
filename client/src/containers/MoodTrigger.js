import { connect } from 'react-redux';
import { setFilter} from '../actions';
import MoodLink from '../components/MoodLink';


const mapStateToProps = (state, ownProps) => {
	console.log("inside mood trigger");
	console.log(ownProps);
	return {
		mood: ownProps.mood
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: (e) => {
		//set all filters here
		console.log("clicked mood trigger");
		dispatch(setFilter("ALLOW_FUTURE_IND", true));
	}
});

const MoodTrigger = connect(
	mapStateToProps,
	mapDispatchToProps
)(MoodLink);

export default MoodTrigger;
