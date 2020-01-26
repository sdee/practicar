import React from 'react';
import './App.css';
import {useRoutes} from 'hookrouter';
import Verbs from './Verbs'
import Numbers from './Numbers'

const routes = {
	'/': () => <Verbs />,
	'/numbers': () => <Numbers />,
};

const App = () => {
	const routeResult = useRoutes(routes);
	return routeResult || 'nada'
}

export default App;
