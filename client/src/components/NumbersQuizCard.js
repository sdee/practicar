import React from 'react';
import PropTypes from 'prop-types';

import QuizCard from './QuizCard';

/**
 * Determines what card should be shown based on quiz state
 */
const NumbersQuizCard = (props) => {
	const {currentCard} = props;
	let answer;
	let question;
	if (currentCard.length !== 0 && currentCard.question !== undefined && currentCard.question.number !== undefined){
		question = <>¿Como se dice <b>{currentCard.question.number.toLocaleString()}</b> en español?</>;
		answer = currentCard.answer;
	}
	return (
		<QuizCard {...props} question={question} correctAnswer={answer} />
	);
}

NumbersQuizCard.propTypes = {
	currentCard: PropTypes.object,
};

NumbersQuizCard.defaultProps = {
	currentCard: {}
};

export default NumbersQuizCard;
