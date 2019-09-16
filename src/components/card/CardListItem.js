import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeCard, updateCard } from '../../redux/category/actions';
import CardListItemForm from './CardListItemForm';
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import { IconButton } from '../elements';
import { useOnClickOutside } from '../../helpers';

const CardListItem = ({
  className,
  card,
  userId,
  categoryName,
  removeCard,
  updateCard
}) => {
  const { english, polish, author } = card;

  const buttonRef = useRef();
  const formRef = useRef();

  const [isEdited, setEdit] = useState(false);

  const handleSubmission = async values => {
    await updateCard(values, categoryName, card.id);
    setEdit(!isEdited);
  };

  useOnClickOutside(formRef, event => {
    if (!buttonRef.current.contains(event.target)) {
      setEdit(false);
    }
  });

  return (
    <div className={className}>
      {isEdited ? (
        <CardListItemForm
          english={english}
          polish={polish}
          handleSubmission={handleSubmission}
          isEdited={isEdited}
          setEdit={setEdit}
          formRef={formRef}
        />
      ) : (
        <div className='words'>
          <div>{english}</div>
          <div>{polish}</div>
        </div>
      )}

      <div className='container'>
        {userId && userId === card.authorId ? (
          <div className='button-container'>
            <IconButton
              ref={buttonRef}
              style={{ marginRight: 12 }}
              onClick={() => {
                if (isEdited === false) {
                  setEdit(true);
                } else {
                  setEdit(false);
                }
              }}
            >
              <FaRegEdit />
            </IconButton>

            <IconButton
              style={{ backgroundColor: 'red' }}
              onClick={() => removeCard(categoryName, card.id)}
            >
              <FaRegTrashAlt />
            </IconButton>
          </div>
        ) : (
          <span className='author'>{author}</span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userId: state.firebase.auth.uid
});

export default styled(
  connect(
    mapStateToProps,
    { removeCard, updateCard }
  )(CardListItem)
)`
  background-color: #fff;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 20px;
  font-size: 1.5rem;

  .words {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    & > div {
      min-height: 100px;
      height: auto;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #ddd;

      word-break: break-all;
      white-space: normal;
    }
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .author {
    font-size: 1.3rem;
  }

  .button-container {
    display: flex;
  }
`;
