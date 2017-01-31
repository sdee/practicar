import React, { PropTypes } from 'react';
import FeedbackCard from './FeedbackCard';
import VerbCard from './VerbCard';
import AnswerCard from './AnswerCard';
import MessageCard from './MessageCard';


function shouldShowFeedbackCard(props) {
	return props.hasSubmittedAnswer && props.infinitive;
}

function shouldShowVerbCard(props) {
	return props.infinitive && props.showAnswer === false;
}

function shouldShowAnswerCard(props) {
	return props.infinitive && props.showAnswer === true;
}

function QuizCard(props) {
	if (shouldShowFeedbackCard(props)) {
		console.log('showing FeedbackCard');
		return (
			<FeedbackCard
				isCorrect={props.isCorrect}
				correctAnswer={props.correctAnswer}
				submittedAnswer={props.submittedAnswer}
			/>
		);
	} else if (shouldShowVerbCard(props)) {
		console.log('showing VerbCard');
		return (
			<VerbCard pronoun={props.pronoun} infinitive={props.infinitive} tense={props.tense} />
		);
	} else if (shouldShowAnswerCard(props)) {
		console.log('showing AnswerCard');
		return (
			<AnswerCard answer={props.correctAnswer} />
		);
	}
	console.log('showing MessageCard');
	return (
		<MessageCard msg={props.text} />
	);
}

QuizCard.propTypes = {
	hasSubmittedAnswer: PropTypes.bool,
	isCorrect: PropTypes.bool,
	showAnswer: PropTypes.bool,
	submittedAnswer: PropTypes.string,
	infinitive: PropTypes.string,
	correctAnswer: PropTypes.string,
	tense: PropTypes.string,
	pronoun: PropTypes.string,
	text: PropTypes.string
};

QuizCard.defaultProps = {
	hasSubmittedAnswer: false,
	correct: false,
	showAnswer: false,
	submittedAnswer: '',
	infinitive: '',
	answer: '',
	tense: '',
	pronoun: '',
	text: ''
};

export default QuizCard;
