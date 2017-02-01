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
  	return <QuizCard {...this.props} />;
  }

}

ControlledCard.propTypes = {
	dispatch: PropTypes.func.isRequired
}

export default connect(state => state.quiz)(ControlledCard);
