import React, { PropTypes } from 'react';

function MoodLink({ mood, onClick }) {
	return (
		<div>
			<a
				href="#toggleMood"
				onClick={(e) => {
					e.preventDefault();
					onClick();
				}}
			>
				turn all on
			</a>
		</div>
	);
}

MoodLink.propTypes = {
	mood: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default MoodLink;
