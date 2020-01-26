import React, {useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {usePath} from 'hookrouter';
import NumbersQuizCard from '../components/NumbersQuizCard';
import VerbQuizCard from '../components/VerbQuizCard';
import { loadQuiz, flipCard } from '../actions';

const ControlledCard = ({dispatch, quiz, user}) => {
	const cardRef = useRef();
	const path = usePath();

	const quizType = path.slice(1) || 'verbs';

	useEffect(() => {
		dispatch(loadQuiz(quizType));
	}, []);

	useEffect(() => {
		if (quiz.focus === 'card' && cardRef) {
			cardRef.current.focus();
		}
	}, [quizType, dispatch, quiz.focus]);

	let quizCard;
	if (quizType === 'numbers') {
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
	quiz: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	quiz: state.quiz,
	user: state.user,
});

export default connect(mapStateToProps)(ControlledCard);
