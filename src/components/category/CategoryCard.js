import React from 'react';
import { Link } from 'react-router-dom';
import { Card1 } from '../elements';
import { declinedWord } from '../../helpers';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.name}`} style={{ textDecoration: 'none' }}>
      <Card1>
        <div className='img'></div>
        <div className='container'>
          <span className='name'>{category.name}</span>
          <span>
            ({category.cardCounter}){' '}
            {declinedWord('pojęcie', category.cardCounter)}
          </span>
          <span className='author'>{category.author}</span>
        </div>
      </Card1>
    </Link>
  );
};

export default CategoryCard;
