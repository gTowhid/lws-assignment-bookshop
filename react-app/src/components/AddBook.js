import { useSelector, useDispatch } from 'react-redux';
import addBook from '../redux/books/thunk/addBook';
import updateBook from '../redux/books/thunk/updateBook';
import { removeEdit } from '../redux/edit/actions';

let book = {
  name: '',
  author: '',
  thumbnail: '',
  price: 0,
  rating: 0,
  featured: false,
};

export default function AddBook() {
  const dispatch = useDispatch();
  const editId = useSelector((state) => state.edit.id);
  const books = useSelector((state) => state.books);

  if (editId) {
    book = books.filter((book) => book.id === editId)[0];
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    window.location.reload(true);
  };

  const editHandler = (e) => {
    e.preventDefault();
    dispatch(updateBook(book, editId));
    window.location.reload(true);
    dispatch(removeEdit());
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form">
          <div className="space-y-2">
            <label for="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              defaultValue={editId && book.name}
              onChange={(e) => (book.name = e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label for="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              defaultValue={editId && book.author}
              onChange={(e) => (book.author = e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label for="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              defaultValue={editId && book.thumbnail}
              onChange={(e) => (book.thumbnail = e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label for="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                defaultValue={editId && book.price}
                onChange={(e) => (book.price = e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label for="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                defaultValue={editId && book.rating}
                min="1"
                max="5"
                onChange={(e) => (book.rating = e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              defaultChecked={editId && book.featured}
              onChange={(e) => (book.featured = e.target.checked)}
            />
            <label for="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          {editId ? (
            <button
              type="submit"
              className="submit"
              id="edit"
              onClick={(e) => editHandler(e)}
            >
              Update Book
            </button>
          ) : (
            <button
              type="submit"
              className="submit"
              id="submit"
              onClick={(e) => submitHandler(e)}
            >
              Add Book
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
