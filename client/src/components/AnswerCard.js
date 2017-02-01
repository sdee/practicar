import React, { PropTypes } from 'react';

function AnswerCard({ answer }) {
	return (
		<div>
			<section className="back">
				{answer}
			</section>
		</div>
	);
}

AnswerCard.propTypes = {
	answer: PropTypes.string.isRequired
};

export default AnswerCard;
