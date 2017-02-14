import React, { PropTypes } from 'react';

function MoodLink({ onClick }) {
	return (
		<div>
			<a
				href="#toggleMood"
				onClick={onClick}
			>
				turn all on
			</a>
		</div>
	);
}

MoodLink.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default MoodLink;
