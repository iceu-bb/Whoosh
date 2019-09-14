import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const CardItem = ({ className, card, userId }) => {
  const { english, polish, author } = card;
  return (
    <div className={className}>
      <div>{english}</div>
      <div>{polish}</div>
      <div>
        autor: {author}
        {userId && userId === card.authorId && <button>Delete card</button>}
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
    null
  )(CardItem)
)`
  background-color: salmon;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;

  & > div {
    padding: 20px;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:not(:last-child) {
    background-color: yellow;
    border-right: 1px solid #ddd;
  }
`;
