import { combineReducers } from 'redux';
import filters from './filters';
import quiz from './quiz';
import user from './user';

const practicar = combineReducers({
	filters,
	quiz,
	user
});

export default practicar;
