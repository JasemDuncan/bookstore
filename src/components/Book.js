import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    title, category,
  } = props;

  const BooksData = {
    director: 'Suzanne Collins',
    porcentage: '64%',
    chapter: 'Chapter 17',
  };

  const {
    director, porcentage, chapter,
  } = BooksData;

  return (
    <>
      <div>
        <ul>
          <li>
            <div>
              <div>
                {`${category}`}
              </div>
              <div>
                {`${title}`}
              </div>
              <div>
                {director}
              </div>
              <div>
                <div>Comments</div>
                <button type="button">Remove</button>
                <div>Edit</div>
              </div>
            </div>
            <div>
              <div>
                {porcentage}
              </div>
              <div>
                Completed
              </div>
            </div>
            <div>
              <div>
                CURRENT CHAPTER
              </div>
              <div>
                {chapter}
              </div>
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
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
