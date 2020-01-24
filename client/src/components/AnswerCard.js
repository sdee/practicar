import React from 'react';
import PropTypes from 'prop-types';

function AnswerCard({ answer, irregularity, before, after }) {
	return (
		<section className="flashcard back">
			<div>
				{answer}
			</div>
		</section>
	);
}

AnswerCard.propTypes = {
	answer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default AnswerCard;
