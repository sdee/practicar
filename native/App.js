import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './containers/MainScreen';
import CustomOptions from './containers/CustomOptions';
import ChooseTenses from './containers/ChooseTenses';
import ChooseVerbs from './containers/ChooseVerbs';
import ChoosePronouns from './containers/ChoosePronouns';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

const AppNav = StackNavigator({
	Main: {screen: MainScreen},
	Options: {screen: CustomOptions},
	ChooseTenses: {screen: ChooseTenses},
	ChooseVerbs: {screen: ChooseVerbs},
	ChoosePronouns: {screen: ChoosePronouns}
});

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppNav />
			</Provider>
		);
	}
}

export default App;
