import React from 'react';

const Categories = () => {
  const QuotesData = {
    name: 'UNDER',
    quote:
            'CONSTRUCTION',
  };

  const Category = () => {
    const { name, quote } = QuotesData;
    return (
      <>
        <div className="content">
          <div className="nameQuote">
            {name}
          </div>
          <div className="quote">
            {quote}
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
