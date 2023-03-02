import { ADDED, DELETED, LOADED, EDITBOOK } from './actionTypes';

const initialState = [];

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED:
      return [
        ...state,
        {
          id: nextBookId(state),
          ...action.payload,
        },
      ];

    case DELETED:
      return state.filter((book) => book.id !== action.payload);

    case EDITBOOK:
      return state.map((book) => {
        if (book.id !== action.payload.id) {
          return book;
        }

        return {
          ...book,
          name: action.payload.book.name,
          author: action.payload.book.author,
          thumbnail: action.payload.book.thumbnail,
          price: action.payload.book.price,
          rating: action.payload.book.rating,
          featured: action.payload.book.featured,
          id: action.payload.book.id,
        };
      });

    default:
      return state;
  }
};

export default booksReducer;
