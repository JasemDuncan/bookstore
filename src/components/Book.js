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
  const percent = Math.floor(Math.random() * 100);

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

        <div className="AllProgress">
          <div className="Progress">
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask full">
                  <div className="fill" />
                </div>
                <div className="mask half">
                  <div className="fill" />
                </div>
                <div className="inside-circle"> </div>
              </div>
            </div>
          </div>
          <div>
            <div className="percent">{`${percent} %`}</div>
            <span className="completed">Completed</span>
          </div>
        </div>
        <div className="LineVertical" />
        <div className="Current">
          <div className="CurrentChapter">
            CURRENT CHAPTER
          </div>
          <div className="Chapter">
            Chapter 17
          </div>
          <div className="Button">
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
