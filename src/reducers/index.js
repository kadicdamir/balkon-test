import { combineReducers } from 'redux'

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import books from './books';
import authors from './authors';

export default combineReducers({
  todos,
  books,
  authors,
  visibilityFilter
});
