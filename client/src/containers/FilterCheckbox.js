import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'react-bootstrap';
import { setFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
	const filter = ownProps.filter;
	const checked = !!state.filter[filter];
	return { checked };
};

const FilterCheckbox = ({ checked, dispatch, label, filter, defaultChecked }) => {
	function handleChange() {
		dispatch(setFilter(filter, !checked));
	}
	// let filterInput;
	return (
		<Checkbox
			// inputRef={(ref) => { filterInput = ref; }}
			checked={checked}
			onChange={handleChange}
		>
			{label}
		</Checkbox>
	);
};

FilterCheckbox.propTypes = {
	dispatch: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	filter: PropTypes.string.isRequired,
	defaultChecked: PropTypes.bool,
	checked: PropTypes.bool.isRequired
};

FilterCheckbox.defaultProps = {
	defaultChecked: false
};

export default connect(mapStateToProps)(FilterCheckbox);
