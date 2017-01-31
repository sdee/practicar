import React, { PropTypes } from 'react';

function FeedbackCard({ correct, correctAnswer, submittedAnswer }) {
	return (
		<div>
			<section className="back">
				<font color={correct ? 'green' : 'red'}>{submittedAnswer}</font>
				<font color="black">{correct === false ? `-> ${correctAnswer}` : ''}</font>
			</section>
		</div>
	);
}

FeedbackCard.propTypes = {
	correct: PropTypes.bool.isRequired,
	correctAnswer: PropTypes.string.isRequired,
	submittedAnswer: PropTypes.string.isRequired
};

export default FeedbackCard;
