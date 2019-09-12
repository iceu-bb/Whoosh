import React from 'react';
import CardItem from './CardItem';

const ListOfCard = ({ cards, length }) => {
  return (
    <div>
      <h2>Lista słówek ({length})</h2>
      {cards.map(card => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
};

export default ListOfCard;
{
}
