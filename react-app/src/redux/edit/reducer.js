import { FOREDIT, REMOVEEDIT } from './actionTypes';

const initialState = {};

const editedReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOREDIT:
      return {
        ...state,
        id: action.payload,
      };

    case REMOVEEDIT:
      return {};

    default:
      return state;
  }
};

export default editedReducer;
