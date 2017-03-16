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

function getBeforeAfter(answer, irregularity) {
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

function QuizCard(props) {
	const beforeAfter = getBeforeAfter(props.correctAnswer, props.irregularity);
	const before = beforeAfter.before;
	const after = beforeAfter.after;
	let card = (<MessageCard msg={props.text} />);

	if (shouldShowFeedbackCard(props)) {
		card = (
			<FeedbackCard
				isCorrect={props.isCorrect}
				correctAnswer={props.correctAnswer}
				submittedAnswer={props.submittedAnswer}
				irregularity={props.irregularity}
				before={before}
				after={after}
			/>
		);
	} else if (shouldShowVerbCard(props)) {
		card = (
			<VerbCard
				pronoun={props.pronoun}
				infinitive={props.infinitive}
				tense={props.tense}
				mood={props.mood}
				definition={props.definition}
			/>
		);
	} else if (shouldShowAnswerCard(props)) {
		card = (
			<AnswerCard
				answer={props.correctAnswer}
				irregularity={props.irregularity}
				before={before}
				after={after}
			/>
		);
	}
	return card;
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
	definition: PropTypes.string
};

QuizCard.defaultProps = {
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
	definition: ''
};

export default QuizCard;
