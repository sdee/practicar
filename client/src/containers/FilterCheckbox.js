import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Checkbox, OverlayTrigger, Glyphicon, Tooltip } from 'react-bootstrap';
import { setFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
	const filter = ownProps.filter;
	const checked = !!state.filter[filter];
	return { checked };
};

const FilterCheckbox = ({ checked, dispatch, label, filter, explanation }) => {
	function handleChange() {
		dispatch(setFilter(filter, !checked));
	}
	let description = '';
	if (explanation) {
		const tooltip = (
			<Tooltip id="tooltip">{explanation}</Tooltip>
		);
		description = (
			<OverlayTrigger
				placement="right"
				overlay={tooltip}
			>
				<Glyphicon
					className="overlay"
					glyph="info-sign"
				/>
			</OverlayTrigger>
		);
	}
	return (
		<div>
			<Checkbox
				checked={checked}
				onChange={handleChange}
			>
				{label}
				{description}
			</Checkbox>
		</div>
	);
};

FilterCheckbox.propTypes = {
	dispatch: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	filter: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	explanation: PropTypes.string
};

FilterCheckbox.defaultProps = {
	explanation: ''
};

export default connect(mapStateToProps)(FilterCheckbox);
