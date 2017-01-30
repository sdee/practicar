import { SET_FILTER, Filters } from '../actions';

const filter = (state = {}, action) => {
  switch (action.type) {
    case SET_FILTER:
      let newState = Object.assign({}, state, {});
      newState[action.filter] = newState[action.filter] ? false : true;
      return newState;
    default:
      return state;
  }
};

export default filter;
