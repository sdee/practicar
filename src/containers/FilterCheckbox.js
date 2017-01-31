import { connect } from 'react-redux';
import { Checkbox } from 'react-bootstrap';
import { setFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
	// active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => {
		dispatch(setFilter(ownProps.filter));
	}
});

const FilterCheckbox = connect(
	mapStateToProps,
	mapDispatchToProps
)(Checkbox);

export default FilterCheckbox;
