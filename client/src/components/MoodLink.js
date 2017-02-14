import React, { PropTypes } from 'react';

function MoodLink({ mood, onClick }) {
	
	return (
		<div>
		<a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
    {mood}
    </a>

		</div>
	);
}

MoodLink.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default MoodLink;
