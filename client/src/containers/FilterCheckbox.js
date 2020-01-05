import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { setFilter } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mapStateToProps = (state, ownProps) => {
	const filter = ownProps.filter;
	const checked = !!state.filter[filter];
	return { checked };
};

const FilterCheckbox = ({ checked, dispatch, label, filter, explanation, disabled }) => {
	const handleChange = () => {
		dispatch(setFilter(filter, !checked));
	}
	let description = '';
	if (explanation) {
		const renderTooltip = (props) => {
			return <Tooltip id="tooltip">{explanation}</Tooltip>;
		}
		description = (
			<OverlayTrigger
				placement="right"
				overlay={renderTooltip}
			>
				<FontAwesomeIcon name="info" icon="info-circle" fixedWidth />
				{/* <Button variant="success">Hover me to see</Button> */}
			</OverlayTrigger>
		);
	}
	return (
		<Form.Check
			type="checkbox"
			checked={checked}
			onChange={handleChange}
		>
			<Form.Check.Input type="checkbox" disabled={disabled} readOnly={disabled} />
			<Form.Check.Label>{label} {description}</Form.Check.Label>
		</Form.Check>
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
	disabled: false
};

export default connect(mapStateToProps)(FilterCheckbox);
