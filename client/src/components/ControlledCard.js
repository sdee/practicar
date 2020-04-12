import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import NumbersQuizCard from './NumbersQuizCard';
import VerbQuizCard from './VerbQuizCard';
import { flipCard } from '../actions';
import SessionEndCard from './SessionEndCard';

const ControlledCard = ({dispatch, quiz, user, filters, type, sessionEnd}) => {
	const cardRef = useRef();
	useEffect(() => {
		if (quiz.focus === 'card' && cardRef) {
			cardRef.current.focus();
		}
	}, [type, dispatch, quiz.focus]);

	let quizCard;
	if (sessionEnd === true) {
		quizCard = React.createElement(SessionEndCard)
	}
	else if (type === 'numbers') {
		quizCard = React.createElement(NumbersQuizCard, {...quiz, questionNum: user.questionNum})
	} else {
		quizCard = React.createElement(VerbQuizCard, {...quiz, questionNum: user.questionNum})
	}
	return (
		<div
			id="card"
			tabIndex="0"
			ref={cardRef}
			onClick={(e) => { dispatch(flipCard()); }}>
			{quizCard}
		</div>
	);
}

ControlledCard.propTypes = {
	dispatch: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	quiz: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	filters: PropTypes.object.isRequired,
	sessionEnd: PropTypes.bool,
};

ControlledCard.defaultProps = {
	sessionEnd: false
}

export default ControlledCard;
