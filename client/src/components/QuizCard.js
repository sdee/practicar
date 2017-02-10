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
		return (
			<FeedbackCard
				isCorrect={props.isCorrect}
				correctAnswer={props.correctAnswer}
				submittedAnswer={props.submittedAnswer}
			/>
		);
	} else if (shouldShowVerbCard(props)) {
		return (
			<VerbCard
				pronoun={props.pronoun}
				infinitive={props.infinitive}
				tense={props.tense}
				mood={props.mood}
				questionNo={props.questionNo}
			/>
		);
	} else if (shouldShowAnswerCard(props)) {
		return (
			<AnswerCard answer={props.correctAnswer} irregularity={props.irregularity} />
		);
	}
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
	text: PropTypes.string,
	mood: PropTypes.string,
	irregularity: PropTypes.string,
	questionNo: PropTypes.number
};

QuizCard.defaultProps = {
	hasSubmittedAnswer: false,
	isCorrect: false,
	showAnswer: false,
	submittedAnswer: '',
	infinitive: '',
	answer: '',
	tense: '',
	pronoun: '',
	text: '',
	mood: '',
	irregularity: '',
	questionNo: 0
};

export default QuizCard;
