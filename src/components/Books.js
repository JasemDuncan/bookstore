import React from 'react';
// import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => (
  <>
    <div>

      <Book
        title="The hunger games"
        category="action"
      />

    </div>
    <AddBook />
  </>
);
export default Books;
