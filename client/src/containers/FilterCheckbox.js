import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'react-bootstrap';
import { setFilter } from '../actions';


const mapStateToProps = (state, ownProps) => {
	const filter = ownProps.filter;
	const checked = state.filter[filter] ? true : false;
	console.log("-------");
	console.log(filter);
	console.log(checked);
	return {
		checked: checked
	};
};

const FilterCheckbox = ({checked, dispatch, label, filter, defaultChecked }) => {// where do these other props come from??
	let filterInput;
	console.log("CHECKED");
	console.log(checked);
	return (
		<Checkbox
			inputRef={(ref) => { filterInput = ref; }}
			onClick={(e) => {
				dispatch(setFilter(filter, filterInput.checked));
			}
			}
			checked={checked}
		>
			{label}
		</Checkbox>
	);
};

FilterCheckbox.propTypes = {
	dispatch: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	filter: PropTypes.string.isRequired,
	defaultChecked: PropTypes.bool
};

FilterCheckbox.defaultProps = {
	defaultChecked: false
};

export default connect(mapStateToProps)(FilterCheckbox);
