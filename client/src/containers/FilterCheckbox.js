import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, OverlayTrigger, Tooltip, Button} from 'react-bootstrap';
import { setFilter } from '../actions';
import FontAwesome from 'react-fontawesome';

const mapStateToProps = (state, ownProps) => {
	const filter = ownProps.filter;
	const checked = !!state.filter[filter];
	return { checked };
};

const FilterCheckbox = ({ checked, dispatch, label, filter, explanation, disable }) => {
	function handleChange() {
		dispatch(setFilter(filter, !checked));
	}
	let description = '';
	if (explanation) {
		function renderTooltip(props) {
			return <Tooltip id="tooltip">{explanation}</Tooltip>;
		  }
		description = (
			<div>
			<OverlayTrigger
				placement="right"
				overlay={renderTooltip}
			>
			<FontAwesome name="info" className="info-circle" fixedWidth />
			{/* <Button variant="success">Hover me to see</Button> */}
			</OverlayTrigger>
			</div>
		);
	}
	return (
		<div>
			<Form.Check
				type={'check'}
				checked={checked}
				onChange={handleChange}
				disabled={disable}
			>
				{label}
				{description}
			</Form.Check>
		</div>
	);
};

FilterCheckbox.propTypes = {
	dispatch: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	filter: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	explanation: PropTypes.string,
	disable: PropTypes.bool
};

FilterCheckbox.defaultProps = {
	explanation: '',
	disable: false
};

export default connect(mapStateToProps)(FilterCheckbox);
