import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Verbs from '../Verbs'
import Numbers from '../Numbers'
import {loadQuiz } from '../actions';

/*
Integrates filters, user, and quiz state slice to choose questions. 
*/
const Quiz = (props) => {
    const { dispatch, type} = props;
    useEffect(() => {
		dispatch(loadQuiz(type));
	}, [dispatch, type]);
    let quizLayout;
    if (type==='numbers'){
        quizLayout = React.createElement(Numbers, {...props})
    } 
    else {
        quizLayout = React.createElement(Verbs, {...props})
    }
return quizLayout;
}

Quiz.propTypes = {
    type: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
	quiz: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	filters: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return ({
        quiz: state.quiz,
        user: state.user,
        filters: state.filter,
	})
};

export default connect(mapStateToProps)(Quiz);