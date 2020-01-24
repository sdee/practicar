import React, {useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NumbersQuizCard from '../components/NumbersQuizCard';
import VerbQuizCard from '../components/VerbQuizCard';
import { loadQuiz, flipCard } from '../actions';
import {usePath} from 'hookrouter';

const ControlledCard = ({dispatch, quiz, quizType, user}) => {
	const cardRef = useRef();
	const path = usePath();

	useEffect(() => {
		const quizType = path.slice(1) || 'verbs'; 
		dispatch(loadQuiz(quizType));
		if (quiz.focus === 'card' && cardRef) {
			cardRef.current.focus();
		}
	  }, [path, dispatch, quiz]);

	let quizCard;
	if (quizType==='numbers') {
		quizCard = React.createElement(NumbersQuizCard, {...quiz, questionNum: user.questionNum})
	}
	else {
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
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	quiz: state.quiz,
	user: state.user,
	quizType: state.quiz.type,
});

export default connect(mapStateToProps)(ControlledCard);
