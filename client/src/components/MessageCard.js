import React, { PropTypes } from 'react';

function MessageCard({ msg }) {
	return (<div>
		<section className="front">
			{msg}
		</section>
	</div>);
}

MessageCard.propTypes = {
	msg: PropTypes.string.isRequired
};

export default MessageCard;
