import { useDispatch } from 'react-redux';
import addBook from '../redux/books/thunk/addBook';

const book = {
  name: '',
  author: '',
  thumbnail: '',
  price: 0,
  rating: 0,
  featured: false,
};

export default function AddBook() {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
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
              onChange={(e) => (book.featured = e.target.checked)}
            />
            <label for="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          <button
            type="submit"
            className="submit"
            id="submit"
            onClick={(e) => submitHandler(e)}
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
