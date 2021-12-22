import React from 'react';

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

  //   const [category, setCategory] = useState('');

  return (
    <>
      <div>
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
              <select name="categories" id="Category" placeholder="Category">
                { categories.map((item) => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                ))}
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

export default AddBook;
