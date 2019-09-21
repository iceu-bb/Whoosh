import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeCard, updateCard } from '../../redux/category/actions';
import CardListItemForm from './CardListItemForm';
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import { IconButton } from '../elements';
import { below } from '../../utilities';
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
  const [englishWord, setEnglishWord] = useState(english);
  const [polishWord, setPolishWord] = useState(polish);

  const buttonRef = useRef();
  const formRef = useRef();

  const [isEdited, setEdit] = useState(false);

  const handleSubmission = async values => {
    await updateCard(values, categoryName, card.id);
    setEnglishWord(values.english);
    setPolishWord(values.polish);
    setEdit(false);
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
          <div>{englishWord}</div>
          <div>{polishWord}</div>
        </div>
      )}

      <div className='button-container'>
        {userId && userId === card.authorId ? (
          <div className='box'>
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
          <div className='box'>{author}</div>
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
  ${below.small`
    grid-column-gap: 0;
  `}

  .words {
    display: grid;
    grid-template-columns: 1fr 1fr;

    & > div {
      min-height: 60px;
      height: auto;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #ccc;
      word-break: break-all;
      white-space: normal;
    }
    ${below.small`
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;

      & > div:first-child {
        border-bottom: 1px solid #ccc;
      }
    `}
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box {
    padding: 0 6%;
    display: flex;
    justify-content: center;
  }
`;
