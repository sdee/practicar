import React from 'react';
import PropTypes from 'prop-types';
import QuizCard from './QuizCard';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const _ = require('lodash');

const getBeforeAfter = (answer, irregularity) => {
	const beforeAfter = {};
	beforeAfter.before = '';
	beforeAfter.after = '';
	if (irregularity.length > 0) {
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
		overlay={<Tooltip id={`tooltip`}>
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
	const before = beforeAfter.before;
	const after = beforeAfter.after;
	return <>{before}<span className="irregularity">{irregularity}</span>{after}</>
}

const VerbQuizCard = (props) => {
	const currentCard = props.currentCard;
	let formattedQuestion;
	let formattedAnswer;

	let answer;
	if (!_.isEmpty(currentCard)) {
		const question = currentCard.question;
		const pronoun = question.pronoun;
		const verb = question.verb;
		const tense = question.tense;
		const mood = question.mood;
		const irregularity = question.irregularity;
		const definition = question.definition;
		formattedQuestion = formatQuestion(pronoun, verb, tense, mood, definition);
		answer = currentCard.answer;
		formattedAnswer = formatAnswer(answer, irregularity);
	}
	return (
		<QuizCard {...props} question={formattedQuestion} correctAnswer={formattedAnswer} />
	);
}

VerbQuizCard.propTypes = {
	hasSubmittedAnswer: PropTypes.bool,
	isCorrect: PropTypes.bool,
	showAnswer: PropTypes.bool,
	submittedAnswer: PropTypes.string,
	infinitive: PropTypes.string,
	correctAnswer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	tense: PropTypes.string,
	pronoun: PropTypes.string,
	text: PropTypes.string,
	mood: PropTypes.string,
	irregularity: PropTypes.string,
	questionNum: PropTypes.number,
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
