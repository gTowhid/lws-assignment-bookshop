import { STATUSCHANGED, SEARCHED } from './actionTypes';

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};

export const searched = (searchTerm) => {
  return {
    type: SEARCHED,
    payload: searchTerm,
  };
};
