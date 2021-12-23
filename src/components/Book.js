import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, category,
  } = props;

  const deleteBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <>
      <div>
        <ul>
          <li>
            <div>
              <div>
                {category}
              </div>
              <div>
                {title}
              </div>
              <div />
              <div>
                <div>Comments</div>
                <button type="button" onClick={() => deleteBook(id)}>Remove</button>
                <div>Edit</div>
              </div>
            </div>
            <div>
              <div />
              <div>
                Completed
              </div>
            </div>
            <div>
              <div>
                CURRENT CHAPTER
              </div>
              <div />
              <div>
                UPDATE PROGRESS
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
