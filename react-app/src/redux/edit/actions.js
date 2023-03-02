import { FOREDIT, REMOVEEDIT } from './actionTypes';

export const forEdit = (bookId) => {
  return {
    type: FOREDIT,
    payload: bookId,
  };
};

export const removeEdit = () => {
  return {
    type: REMOVEEDIT,
  };
};
