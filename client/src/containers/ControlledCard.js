import React, { Component, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuizCard from '../components/QuizCard';
import { loadQuiz, flipCard } from '../actions';
import {usePath} from 'hookrouter';

const ControlledCard = (props) => {
	const cardRef = useRef();
	const path = usePath();

	useEffect(() => {
		const quizType = path.slice(1)
		props.dispatch(loadQuiz(quizType));
		if (props.quiz.focus === 'card' && cardRef) {
			cardRef.current.focus();
		}
	  }, []);

		return (
			<div
				id="card"
				tabIndex="0"
				// ref={(div) => { this.card = div; }}
				ref={cardRef}
				onClick={(e) => { props.dispatch(flipCard()); }}>
				<QuizCard {...props.quiz} questionNum={props.user.questionNum} />
			</div>
		);
	}


ControlledCard.propTypes = {
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	quiz: state.quiz,
	user: state.user
});

export default connect(mapStateToProps)(ControlledCard);
