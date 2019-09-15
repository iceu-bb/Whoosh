import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { removeCard, updateCard } from '../../redux/category/actions';
import CardItemForm from './CardItemForm';

const CardItem = ({
  className,
  card,
  userId,
  categoryName,
  removeCard,
  updateCard,
  history
}) => {
  const { english, polish, author } = card;

  const [isEdited, setEdit] = useState(false);

  const handleSubmission = async values => {
    await updateCard(values, categoryName, card.id);
    setEdit(!isEdited);
    // history.go(0);
  };

  return (
    <div className={className}>
      {isEdited ? (
        <CardItemForm
          english={english}
          polish={polish}
          setEdit={setEdit}
          handleSubmission={handleSubmission}
        />
      ) : (
        <div className='words'>
          <div>{english}</div>
          <div>{polish}</div>
        </div>
      )}

      <div className='container'>
        autor: {author}
        {userId && userId === card.authorId && (
          <>
            {!isEdited && (
              <button onClick={() => setEdit(!isEdited)}>Edit card</button>
            )}

            <button
              onClick={async () => {
                await removeCard(categoryName, card.id);
                // history.go(0);
              }}
            >
              Delete card
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userId: state.firebase.auth.uid
});

export default styled(
  withRouter(
    connect(
      mapStateToProps,
      { removeCard, updateCard }
    )(CardItem)
  )
)`
  background-color: salmon;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 20px;
  font-size: 1.5rem;

  .words {
    background-color: yellow;
    border-right: 1px solid #ddd;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    & > div {
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
