import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../redux/books/thunk/fetchBooks';
import { statusChanged } from '../redux/filters/actions';
import BookCard from './BookCard';

export default function BookList() {
  const books = useSelector((state) => state.books);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            className="filter-btn active-filter"
            id="lws-filterAll"
            onClick={(e) =>
              dispatch(statusChanged(e.target.innerText.toLowerCase()))
            }
          >
            All
          </button>
          <button
            className="filter-btn"
            id="lws-filterFeatured"
            onClick={(e) =>
              dispatch(statusChanged(e.target.innerText.toLowerCase()))
            }
          >
            Featured
          </button>
        </div>
      </div>
      <div className="lws-bookContainer">
        {books.length !== 0
          ? books
              .filter((book) =>
                filters.status === 'featured' ? book.featured === true : book
              )
              .map((book) => <BookCard key={book.id} book={book} />)
          : 'NO BOOK TO SHOW'}
      </div>
    </div>
  );
}
