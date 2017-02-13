import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'react-bootstrap';
import { setFilter } from '../actions';

const FilterCheckbox = ({ dispatch, label, filter, defaultChecked }) => {
	let filterInput;
	return (
		<Checkbox
			inputRef={(ref) => { filterInput = ref; }}
			onClick={(e) => {
				dispatch(setFilter(filter, filterInput.checked));
			}
			}
			defaultChecked={defaultChecked}
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

export default connect()(FilterCheckbox);
