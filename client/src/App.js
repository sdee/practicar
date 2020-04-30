import React from 'react';
import { connect } from 'react-redux';
import { useRoutes } from 'hookrouter';

import QuizPage from './components/QuizPage';
import {getIsFirstQuestion, getIsLastQuestion, getIsSessionOver, getIsSessionEnabled} from './selectors/currentSession';

const routes = (props) => { 

	return ({
	'/': () => (
		<QuizPage
			{... props}
			headerText="Yo practico, tú practicas, nosotros practicamos"
		/>
	),
	'/numbers': () => (
		<QuizPage
			{... props}
			headerText="Cuenta conmigo. Uno, dos, tres ..."
		/>
	),
})};

const App = (props) => {
	const routeResult = useRoutes(routes(props));
	return routeResult || 'nada'
};

const mapStateToProps = (state) => ({
	filters: state.filters,
	type: state.quiz.type,
	quiz: state.quiz,
	user: state.user,
	session: {isSessionOver: getIsSessionOver(state),
		isFirstQuestionInSession: getIsFirstQuestion(state),
		isLastQuestionInSession: getIsLastQuestion(state),
		isSessionEnabled: getIsSessionEnabled(state),
		sessionQuestionNum: state.currentSession.sessionQuestionNum,
		sessionLength: state.currentSession.sessionLength}
});

export default connect(mapStateToProps)(App);
