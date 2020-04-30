import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import QuizCard from './QuizCard';

const getBeforeAfter = (answer, irregularity) => {
	const beforeAfter = {};
	beforeAfter.before = '';
	beforeAfter.after = '';
	if (irregularity && irregularity.length > 0) {
		const iStartIndex = answer.indexOf(irregularity);
		const iEndIndex = iStartIndex + irregularity.length;
		beforeAfter.before = answer.slice(0, iStartIndex).trim();
		beforeAfter.after = answer.slice(iEndIndex, answer.length).trim();
	} else {
		beforeAfter.before = answer;
	}
	return beforeAfter;
}

const DefinitionHoverover = ({ definition }) => (
	<OverlayTrigger
		placement="right"
		overlay={<Tooltip id="tooltip">
			{definition}
		</Tooltip>}
	>
		<FontAwesomeIcon icon="question-circle" size="xs" />
	</OverlayTrigger>
);


const formatQuestion = (pronoun, infinitive, tense, mood, definition) => {
	return <>{pronoun}, <b>{infinitive}</b><br />({tense} {mood}) <DefinitionHoverover definition={definition} /></>
}

const formatAnswer = (answer, irregularity) => {
	const beforeAfter = getBeforeAfter(answer, irregularity);
	const {before, after} = beforeAfter;
	return <>{before}<span className="irregularity">{irregularity}</span>{after}</>
}

const VerbQuizCard = (props) => {
	const {currentCard} = props;
	let formattedQuestion;
	let formattedAnswer;

	if (currentCard && currentCard.length !== 0) {
		const {question} = currentCard;
		if (question) {
			const {pronoun, verb, tense, mood, irregularity, definition} = question;
			formattedQuestion = formatQuestion(pronoun, verb, tense, mood, definition);
			formattedAnswer = formatAnswer(currentCard.answer, irregularity);
		}
	}
	return (
		<QuizCard {...props} question={formattedQuestion} correctAnswer={formattedAnswer} />
	);
}

VerbQuizCard.propTypes = {
	currentCard: PropTypes.object.isRequired,
	hasSubmittedAnswer: PropTypes.bool,
	isCorrect: PropTypes.bool,
	showAnswer: PropTypes.bool,
	submittedAnswer: PropTypes.string,
	infinitive: PropTypes.string,
	correctAnswer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	answer: PropTypes.string,
	tense: PropTypes.string,
	pronoun: PropTypes.string,
	text: PropTypes.string,
	mood: PropTypes.string,
	irregularity: PropTypes.string,
	questionNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	definition: PropTypes.string
};

VerbQuizCard.defaultProps = {
	hasSubmittedAnswer: false,
	isCorrect: false,
	showAnswer: false,
	submittedAnswer: '',
	infinitive: '',
	correctAnswer: '',
	answer: '',
	tense: '',
	pronoun: '',
	text: '',
	mood: '',
	irregularity: '',
	questionNum: 0,
	definition: ''
};

export default VerbQuizCard;
