import { edited } from '../actions';

const updateBook = (bookInfo, bookId) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: bookInfo.name,
        author: bookInfo.author,
        thumbnail: bookInfo.thumbnail,
        price: bookInfo.price,
        rating: bookInfo.rating,
        featured: bookInfo.featured,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const book = await response.json();

    dispatch(edited(book, bookId));
  };
};

export default updateBook;
