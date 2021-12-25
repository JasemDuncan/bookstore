import React from 'react';

const Categories = () => {
  const Data = {
    name: 'UNDER CONSTRUCTION',
  };

  const Category = () => {
    const { name } = Data;
    return (
      <>
        <div className="content">
          <div className="UnderConstruction">
            {name}
          </div>

        </div>
      </>
    );
  };

  return (
    <Category />
  );
};

export default Categories;
