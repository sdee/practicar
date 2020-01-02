import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function MoodLink({ label, onClick }) {
	return (
		<Button
			bsClass="btn btn-default btn-xs"
			href="#toggleMood"
			onClick={onClick}
		>
			{label}
		</Button>
	);
}

MoodLink.propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
};

export default MoodLink;
