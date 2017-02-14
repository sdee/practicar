import { connect } from 'react-redux';
import { setFilter} from '../actions';
import MoodLink from '../components/MoodLink';


const mapStateToProps = (state, ownProps) => {
	console.log("inside mood trigger");
	console.log(ownProps);
	//need an on or off inside this, does it have to be in state???
	return {
		mood: ownProps.mood
	};
};

function turnOnFiltersForMood (mood, dispatch) {
	const indicatives = ["ALLOW_PRESENT_IND", "ALLOW_PRETERITE_IND", "ALLOW_IMPERFECT_IND", "ALLOW_CONDITIONAL_IND", "ALLOW_FUTURE_IND"];
	const subjunctives = ["ALLOW_PRESENT_SUBJ", "ALLOW_IMPERFECT_SUBJ", "ALLOW_FUTURE_SUBJ"];
	const moodToFilters = {
		"INDICATIVE": indicatives,
		"SUBJUNCTIVE": subjunctives
	};
	
	console.log("M--------");
	const filters = moodToFilters[mood];
	filters.forEach(function (f) {
		dispatch(setFilter(f, true));
		});
} 

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: (e) => {
		//set all filters here
		console.log("clicked mood trigger!!!!");
		console.log(ownProps);
		turnOnFiltersForMood(ownProps.mood, dispatch);
		//dispatch(setFilter("ALLOW_FUTURE_IND", true)); //need to reverse
	}
});

const MoodTrigger = connect(
	mapStateToProps,
	mapDispatchToProps
)(MoodLink);

export default MoodTrigger;
