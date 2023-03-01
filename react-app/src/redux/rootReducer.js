import booksReducer from './books/reducer';
import filterReducer from './filters/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  books: booksReducer,
  filters: filterReducer,
});

export default rootReducer;
