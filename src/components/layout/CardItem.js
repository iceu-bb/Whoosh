import React from 'react';

const CardItem = ({ card }) => {
  const { english, polish, author } = card;
  return (
    <div>
      <div>{english}</div>
      <div>{polish}</div>
      <div>autor: {author}</div>
    </div>
  );
};

export default CardItem;
