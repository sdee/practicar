import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import QuizCard from '../components/QuizCard';
import { loadQuiz, flipCard } from '../actions';

class ControlledCard extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(loadQuiz());
	}

	componentDidUpdate() {
		if (this.props.quiz.focus === 'card') {
			this.card.focus();
		}
	}

	render() {
		const { dispatch } = this.props;
		return (
			<div
				id="card"
				tabIndex="0"
				ref={(div) => { this.card = div; }}
				onClick={(e) => { dispatch(flipCard()); }}>
				<QuizCard {...this.props.quiz} questionNum={this.props.user.questionNum} />
			</div>
		);
	}
}

ControlledCard.propTypes = {
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	quiz: state.quiz,
	user: state.user
});

export default connect(mapStateToProps)(ControlledCard);
