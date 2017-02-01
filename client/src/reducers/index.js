import { combineReducers } from 'redux';
import filter from './filter';
import quiz from './quiz';
import user from './user';

const practicar = combineReducers({
  filter,
  quiz,
  user
});

export default practicar;
