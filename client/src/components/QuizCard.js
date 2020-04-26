import React from 'react';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard'
import FeedbackCard from './FeedbackCard';
import AnswerCard from './AnswerCard';
import MessageCard from './MessageCard';
import SessionEndCard from './SessionEndCard';

function shouldShowFeedbackCard(props) {
	return props.hasSubmittedAnswer && props.question;
}

function shouldShowVerbCard(props) {
	return props.question && props.showAnswer === false;
}

function shouldShowAnswerCard(props) {
	return props.question && props.showAnswer === true;
}

/**
 * Determines what card should be shown based on quiz state
 */
function QuizCard(props) {
	if (props.sessionOver === true){
		return(<SessionEndCard></SessionEndCard>);
	}
	else if (shouldShowFeedbackCard(props)) {
		return (
			<FeedbackCard
				isCorrect={props.isCorrect}
				correctAnswer={props.correctAnswer}
				submittedAnswer={props.submittedAnswer}
			/>
		);
	} else if (shouldShowVerbCard(props)) {
		return (
			<QuestionCard question={props.question} questionNum={props.questionNum}
			/>
		);
	} else if (shouldShowAnswerCard(props)) {
		return (
			<AnswerCard
				answer={props.correctAnswer}
			/>
		);
	}

	return (
		<MessageCard msg={props.text} />
	);
}

QuizCard.propTypes = {
	currentQuestion: PropTypes.object,
	question:  PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	correctAnswer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	hasSubmittedAnswer: PropTypes.bool,
	isCorrect: PropTypes.bool,
	showAnswer: PropTypes.bool,
	submittedAnswer: PropTypes.string,
	text: PropTypes.string, //message
	questionNum: PropTypes.number,
	sessionOver: PropTypes.bool.isRequired
};

QuizCard.defaultProps = {
	currentQuestion: {},
	question: '',
	hasSubmittedAnswer: false,
	isCorrect: false,
	showAnswer: false,
	submittedAnswer: '',
	correctAnswer: '',
	text: '',
	questionNum: 0,
	sessionOver: false
};

export default QuizCard;
