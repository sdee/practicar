import React, { PropTypes } from 'react';
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
