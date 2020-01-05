import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './custom.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas);

const store = createStore(rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
