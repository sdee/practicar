import React from 'react';
import PropTypes from 'prop-types';

function MessageCard({ msg }) {
	return (<div>
		<section className="flashcard front">
			<div>
				{msg}
			</div>
		</section>
	</div>);
}

MessageCard.propTypes = {
	msg: PropTypes.string.isRequired
};

export default MessageCard;
