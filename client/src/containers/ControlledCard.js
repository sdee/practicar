import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import QuizCard from '../components/QuizCard';
import { loadQuiz } from '../actions'

class ControlledCard extends Component {

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(loadQuiz());
	}

	render() {
		return <QuizCard {...this.props.quiz} questionNum={this.props.user.questionNum} />;
	}

}

ControlledCard.propTypes = {
	dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		quiz: state.quiz,
		user: state.user
	};
};

export default connect(mapStateToProps)(ControlledCard);
