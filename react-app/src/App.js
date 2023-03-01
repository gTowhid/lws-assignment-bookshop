import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BookList />
          <AddBook />
        </div>
      </main>
    </Provider>
  );
}

export default App;
