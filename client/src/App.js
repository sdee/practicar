import React from 'react';
import { connect } from 'react-redux';
import { useRoutes } from 'hookrouter';

import QuizPage from './components/QuizPage';

const routes = (props) => ({
	'/': () => (
		<QuizPage
			type={props.type}
			filters={props.filters}
			user={props.user}
			quiz={props.quiz}
			dispatch={props.dispatch}
			headerText="Yo practico, tú practicas, nosotros practicamos"
		/>
	),
	'/numbers': () => (
		<QuizPage
			type={props.type}
			filters={props.filters}
			user={props.user}
			quiz={props.quiz}
			dispatch={props.dispatch}
			headerText="Cuenta conmigo. Uno, dos, tres ..."
		/>
	),
});

const App = (props) => {
	const routeResult = useRoutes(routes(props));
	return routeResult || 'nada'
};

const mapStateToProps = (state) => ({
	filters: state.filters,
	type: state.quiz.type,
	quiz: state.quiz,
	user: state.user,
});

export default connect(mapStateToProps)(App);
