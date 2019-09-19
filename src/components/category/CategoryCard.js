import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card1 } from '../elements';
import { declinedWord } from '../../helpers';

const Image = styled.div`
  height: 75%;
  width: 100%;
  background: ${({ img }) => (img ? `url(${img})` : 'teal')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.name}`} style={{ textDecoration: 'none' }}>
      <Card1>
        <Image img={category.imagePath} />
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
