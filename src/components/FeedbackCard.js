import React, { PropTypes } from 'react';

function FeedbackCard({ isCorrect, correctAnswer, submittedAnswer }) {
	const userAnswerClass = isCorrect ? 'correctAnswer' : 'incorrectAnswer';
	return (
		<div>
			<section className="back">
				<span className={userAnswerClass}>{submittedAnswer}</span>
				<span className="answer">{isCorrect ? '' : ` -> ${correctAnswer}`}</span>
			</section>
		</div>
	);
}

FeedbackCard.propTypes = {
	isCorrect: PropTypes.bool.isRequired,
	correctAnswer: PropTypes.string.isRequired,
	submittedAnswer: PropTypes.string.isRequired
};

export default FeedbackCard;
