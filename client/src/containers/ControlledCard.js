import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import QuizCard from '../components/QuizCard';
import { loadQuiz, flipCard } from '../actions';
import KeyboardControls from './KeyboardControls';

class ControlledCard extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(loadQuiz());
		this.card.focus();
	}

	render() {
		const { dispatch } = this.props;
		return (
			<KeyboardControls>
				<div id="card" tabIndex="1" ref={(div) => { this.card = div; }} onClick={(e) => {
					dispatch(flipCard());}}>
					<QuizCard {...this.props}/>
				</div>
			</KeyboardControls>
		);
	}
}

ControlledCard.propTypes = {
	dispatch: PropTypes.func.isRequired
}

export default connect(state => state.quiz)(ControlledCard);
