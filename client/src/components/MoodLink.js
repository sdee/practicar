import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function MoodLink({ label, onClick }) {
	return (
		<Button
			href="#toggleMood"
			variant="secondary"
			size="sm"
			onClick={onClick}
			className="mood-link"
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
