import React from 'react';
import PropTypes from 'prop-types';

function FeedbackCard({ isCorrect, correctAnswer, submittedAnswer}) {
	const userAnswerClass = isCorrect ? 'correctAnswer' : 'incorrectAnswer';
	const displayAnswer = isCorrect ? correctAnswer : submittedAnswer; //still don't use submittedAnswer if correct because submittedAnswer may lack accent in non-strict mode
	return (
		<section className="flashcard back">
			<div>
				<span className={userAnswerClass}>{displayAnswer}</span>
				{!isCorrect ? (
					<span className="answer">{correctAnswer}</span>
				) : ('')}
			</div>
		</section>
	);
}

FeedbackCard.propTypes = {
	isCorrect: PropTypes.bool.isRequired,
	correctAnswer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	submittedAnswer: PropTypes.string.isRequired,
};

export default FeedbackCard;
