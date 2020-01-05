import React from 'react';
import PropTypes from 'prop-types';

function MessageCard({ msg }) {
	return (
		<section className="flashcard front">
			<div>
				{msg}
			</div>
		</section>
	);
}

MessageCard.propTypes = {
	msg: PropTypes.string.isRequired
};

export default MessageCard;
