import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <>
      <div>
        {books.map((book) => (
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
