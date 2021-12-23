import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const bookss = useSelector((state) => state.booksReducer);

  return (
    <>
      <div>
        {bookss.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
          />
        ))}
        ;
      </div>
      <AddBook />
    </>
  );
};
export default Books;
