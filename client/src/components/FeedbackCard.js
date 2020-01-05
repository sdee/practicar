import React from 'react';
import PropTypes from 'prop-types';

function FeedbackCard({ isCorrect, correctAnswer, submittedAnswer, irregularity, before, after }) {
	const userAnswerClass = isCorrect ? 'correctAnswer' : 'incorrectAnswer';
	const displayAnswer = isCorrect ? correctAnswer : submittedAnswer;
	return (
		<section className="flashcard back">
			<div>
				<span className={userAnswerClass}>{displayAnswer}</span>
				{!isCorrect ? (
					<span className="answer"> {'-> '}{before}<span className="irregularity">{irregularity}</span>{after}</span>
				) : ('')}
			</div>
		</section>
	);
}

FeedbackCard.propTypes = {
	isCorrect: PropTypes.bool.isRequired,
	correctAnswer: PropTypes.string.isRequired,
	submittedAnswer: PropTypes.string.isRequired,
	irregularity: PropTypes.string.isRequired,
	before: PropTypes.string.isRequired,
	after: PropTypes.string.isRequired
};

export default FeedbackCard;
