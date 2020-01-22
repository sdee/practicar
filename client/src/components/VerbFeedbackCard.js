import React from 'react';
import PropTypes from 'prop-types';
import FeedbackCard from './FeedbackCard';

function VerbFeedbackCard({ isCorrect, correctAnswer, submittedAnswer, irregularity, before, after }) {
	const userAnswerClass = isCorrect ? 'correctAnswer' : 'incorrectAnswer';
	const displayAnswer = isCorrect ? correctAnswer : submittedAnswer;
	const formattedAnswer = (<span className="answer"> {'-> '}{before}<span className="irregularity">{irregularity}</span>{after}</span>)
	return (
		<FeedbackCard isCorrect={isCorrect} correctAnswer={formattedAnswer} submittedAnswer={submittedAnswer} />
	);
}

VerbFeedbackCard.propTypes = {
	isCorrect: PropTypes.bool.isRequired,
	correctAnswer: PropTypes.string.isRequired,
	submittedAnswer: PropTypes.string.isRequired,
	irregularity: PropTypes.string.isRequired,
	before: PropTypes.string.isRequired,
	after: PropTypes.string.isRequired
};

export default VerbFeedbackCard;
