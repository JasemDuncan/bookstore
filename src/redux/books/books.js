import React from 'react';

const Books = () => {
  const BooksData = {
    gender: 'Action',
    title: 'The Hunger Games',
    director: 'Suzanne Collins',
    porcentage: '64%',
    chapter: 'Chapter 17',
  };

  const Book = () => {
    const {
      gender, title, director, porcentage, chapter,
    } = BooksData;
    return (
      <>
        <div>
          <ul>
            <li>
              <div>
                <div>
                  {gender}
                </div>
                <div>
                  {title}
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
          <form action="/">
            <div>
              <div> ADD NEW BOOK</div>
              <div>
                {' '}
                <input type="text" />
              </div>
            </div>
            <div>
              <div>
                <select name="categories" id="Category">
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Triller">Triller</option>
                </select>
              </div>
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </>
    );
  };

  return (
    <Book />
  );
};

export default Books;
