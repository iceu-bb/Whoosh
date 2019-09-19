import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { deleteCategory } from '../../redux/category/actions';
import { Card1, IconButton } from '../elements';
import { declinedWord } from '../../helpers';
import { FaRegTrashAlt } from 'react-icons/fa';

const Image = styled.div`
  height: 75%;
  width: 100%;
  background: ${({ img }) => (img ? `url(${img})` : 'teal')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const CategoryCard = ({ category, settings, deleteCategory }) => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Link
        to={`/category/${category.name}`}
        style={{ textDecoration: 'none' }}
      >
        <Card1>
          <Image img={category.imagePath} />
          <div className='container'>
            <span className='name'>{category.name}</span>
            <span>
              ({category.cardCounter}){' '}
              {declinedWord('pojęcie', category.cardCounter)}
            </span>
            {settings ? (
              <span className='hidden'>hidden</span>
            ) : (
              <span className='author'>{category.author}</span>
            )}
          </div>
        </Card1>
      </Link>
      {settings && (
        <IconButton
          modifiers={['small', 'red', 'positioned']}
          onClick={() => {
            console.log('kliklem usuń');
            deleteCategory(category.name);
          }}
        >
          <FaRegTrashAlt />
        </IconButton>
      )}
    </div>
  );
};

export default connect(
  null,
  { deleteCategory }
)(CategoryCard);
