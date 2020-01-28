import React from 'react';
import './App.css';
import {useRoutes} from 'hookrouter';
import Quiz from './containers/Quiz'

const routes = {
	'/': () => <Quiz type={'verbs'} />,
	'/numbers': () => <Quiz type={'numbers'} />,
};

const App = () => {
	const routeResult = useRoutes(routes);
	return routeResult || 'nada'
}

export default App;
