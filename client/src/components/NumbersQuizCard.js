import React from 'react';
import PropTypes from 'prop-types';
import QuizCard from './QuizCard'
const _ = require('lodash');
/**
 * Determines what card should be shown based on quiz state
 */
const NumbersQuizCard = (props) => {
    const currentCard = props.currentCard;
    let question;
    let answer;
    if (!_.isEmpty(currentCard)){
        question = '¿Como se dice '+currentCard.question.number + ' en español?';
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
