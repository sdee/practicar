/*
 * action types
 */
export const SET_FILTER = 'SET_FILTER'

/*
 * other constants
 */
export const Filters = {
  SET_REPEATS: 'SET_REPEATS',
  SET_VOSOTROS: 'SET_VOSOTROS',
  SET_IRREGULAR: 'SET_IRREGULAR',
  SET_INDICATIVE: 'SET_INDICATIVE',
  SET_PRESENT: 'SET_PRESENT',
  SET_PRETERITE: 'SET_PRETERITE',
  SET_IMPERFECT: 'SET_IMPERFECT',
  SET_CONDITIONAL: 'SET_CONDITIONAL',
  SET_FUTURE: 'SET_FUTURE'
};

/*
 * action creators
 */
export function setFilter(filter) {
  return { type: SET_FILTER, filter }
};
