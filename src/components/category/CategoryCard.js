import React from 'react';
import { Link } from 'react-router-dom';
import { Card1 } from '../elements';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.name}`} style={{ textDecoration: 'none' }}>
      <Card1>
        <div className='img'></div>
        <div className='container'>
          <span className='name'>{category.name}</span>
          {/* odmienic przez przypadki */}
          <span>({category.cardCounter}) pojęć</span>
          <span className='author'>{category.author}</span>
        </div>
      </Card1>
    </Link>
  );
};

export default CategoryCard;
