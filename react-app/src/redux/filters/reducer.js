import { SEARCHED, STATUSCHANGED } from './actionTypes';

const initialState = {
  status: 'all',
  searchTerm: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case SEARCHED:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
