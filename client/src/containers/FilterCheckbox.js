import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setFilter } from '../actions';

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
			</OverlayTrigger>
		);
	}
	return (
		<Form.Check>
			<Form.Check.Input type="checkbox" onChange={handleChange} checked={checked} disabled={disabled} />
			<Form.Check.Label>
				{label} {description}
			</Form.Check.Label>
		</Form.Check>

	);
};

FilterCheckbox.propTypes = {
	dispatch: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	filter: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	explanation: PropTypes.string,
	disabled: PropTypes.bool
};

FilterCheckbox.defaultProps = {
	explanation: '',
	disabled: false,
	checked: false
};

const mapStateToProps = (state, ownProps) => {
	const checked = !!state.filters[ownProps.filter];
	return { checked };
};

export default connect(mapStateToProps)(FilterCheckbox);
