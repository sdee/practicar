import React, { PropTypes } from 'react';

function FeedbackCard({ isCorrect, correctAnswer, submittedAnswer, irregularity, before, after }) {
	const userAnswerClass = isCorrect ? 'correctAnswer' : 'incorrectAnswer';
	const displayAnswer = isCorrect ? correctAnswer : submittedAnswer;
	return (
		<div>
			<section className="card back">
				<div>
					<span className={userAnswerClass}>{displayAnswer}</span>
					{!isCorrect ? (
						<span className="answer"> {'-> '}{before}<span className="irregularity">{irregularity}</span>{after}</span>
					) : ('')}
				</div>
			</section>
		</div>
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
