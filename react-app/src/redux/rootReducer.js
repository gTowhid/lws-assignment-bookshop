import booksReducer from './books/reducer';
import filterReducer from './filters/reducer';
import editedReducer from './edit/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  books: booksReducer,
  filters: filterReducer,
  edit: editedReducer,
});

export default rootReducer;
