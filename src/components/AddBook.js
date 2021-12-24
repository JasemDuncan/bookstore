import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as id } from 'uuid';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const categories = [
    {
      id: 1,
      name: 'Action',
    },
    {
      id: 2,
      name: 'Comedy',
    },
    {
      id: 3,
      name: 'Drama',
    },
    {
      id: 4,
      name: 'Triller',
    },
  ];

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const lblBookTitleChanged = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const chkCategoriesChanged = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const Submit = () => {
    const newBook = {
      id: id(),
      title,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <>
      <div className="AllAdd">
        <div className="Line" />
        <div className="mb-3 AddBookText"> ADD NEW BOOK</div>
        <Form action="/" onSubmit={Submit}>
          <Row className="">
            <Form.Group as={Col}>
              <div className="ColumnRow">
                <Form.Control
                  type="text"
                  value={title}
                  placeholder="Book title"
                  id="lblBookTitle"
                  onChange={lblBookTitleChanged}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group as={Col}>
              <div className="ColumnCheckBox">
                <Form.Control
                  as="select"
                  id="chkCategories"
                  placeholder="Category"
                  value={category}
                  onChange={chkCategoriesChanged}
                  required
                >
                  <option value="" disabled hidden>Category</option>
                  { categories.map((items) => (
                    <option key={items.id} value={items.name}>{items.name}</option>
                  ))}
                </Form.Control>
              </div>
            </Form.Group>
            <Form.Group as={Col}>
              <div>
                <Button className="ColumnButton" variant="primary" type="submit" value="Submit" onClick={Submit}>Add Book</Button>
              </div>

            </Form.Group>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default AddBook;
