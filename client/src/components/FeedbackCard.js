import React, { PropTypes } from 'react';

function FeedbackCard({ isCorrect, correctAnswer, submittedAnswer }) {
	const userAnswerClass = isCorrect ? 'correctAnswer' : 'incorrectAnswer';
	const displayAnswer = isCorrect ? correctAnswer : submittedAnswer;
	return (
		<div>
			<section className="card back">
				<div>
					<span className={userAnswerClass}>{displayAnswer}</span>
					<span className="answer">{isCorrect ? '' : ` -> ${correctAnswer}`}</span>
				</div>
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