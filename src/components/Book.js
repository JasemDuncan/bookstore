import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

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
      <div className="Lesson-Panel">

        <div className="first-column">
          <div>
            <span className="School-of">
              {category}
            </span>
          </div>
          <div>
            <span className="Title">
              {title}
            </span>
          </div>
          <div>
            <span className="Suzanne-Collins">
              Suzanne Collins
            </span>
          </div>
          <div className="crud">
            <div><span className="Comments">Comments</span></div>
            <div className="Line-2">|</div>
            <button className="Remove" type="button" onClick={() => deleteBook(id)}>Remove</button>
            <div className="Line-2">|</div>
            <div><span className="Edit">Edit</span></div>
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
            <Button>UPDATE PROGRESS</Button>
          </div>
        </div>

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
