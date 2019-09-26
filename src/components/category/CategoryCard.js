import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { openModal } from '../../redux/modal/modalActionts';
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

const CategoryCard = ({ category, settings, openModal }) => {
  return (
    <article style={{ position: 'relative' }}>
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
            openModal('ConfirmationModal', { categoryName: category.name });
          }}
        >
          <FaRegTrashAlt />
        </IconButton>
      )}
    </article>
  );
};

export default connect(
  null,
  { openModal }
)(CategoryCard);
