import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
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
      <ListGroup>
        {bookss.map((book) => (
          <>
            <ListGroup.Item className="ListGroup">
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                category={book.category}
              />
            </ListGroup.Item>
          </>
        ))}
      </ListGroup>
      <AddBook />
    </>
  );
};
export default Books;
