import React, { PropTypes } from 'react';
import FeedbackCard from './FeedbackCard';
import VerbCard from './VerbCard';
import AnswerCard from './AnswerCard';
import MessageCard from './MessageCard';

function QuizCard(props) {
	if (props.hasSubmittedAnswer && props.infinitive) {
		return (
			<FeedbackCard
				correct={props.correct}
				correctAnswer={props.answer}
				submittedAnswer={props.submittedAnswer}
			/>
		);
	} else if (props.infinitive && props.showAnswer === false) {
		return (
			<VerbCard pronoun={props.pronoun} infinitive={props.infinitive} tense={props.tense} />
		);
	} else if (props.infinitive && props.showAnswer === true) {
		return (
			<AnswerCard answer={props.answer} />
		);
	}
	return (
		<MessageCard msg={props.text} />
	);
}

QuizCard.propTypes = {
	hasSubmittedAnswer: PropTypes.bool,
	correct: PropTypes.bool,
	showAnswer: PropTypes.bool,
	submittedAnswer: PropTypes.bool,
	infinitive: PropTypes.string,
	answer: PropTypes.string,
	tense: PropTypes.string,
	pronoun: PropTypes.string,
	text: PropTypes.string
};

QuizCard.defaultProps = {
	hasSubmittedAnswer: false,
	correct: false,
	showAnswer: false,
	submittedAnswer: false,
	infinitive: '',
	answer: '',
	tense: '',
	pronoun: '',
	text: ''
};

export default QuizCard;
