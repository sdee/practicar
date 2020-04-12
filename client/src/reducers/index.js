import { combineReducers } from 'redux';
import currentSession from './currentSession';
import filters from './filters';
import quiz from './quiz';
import user from './user';

const practicar = combineReducers({
	filters,
	quiz,
	currentSession,
	user
});

export default practicar;
