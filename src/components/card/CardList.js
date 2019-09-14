import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';

const ListOfCard = ({ className, cards, length, categoryName }) => {
  return (
    <div className={className}>
      <p className='text'>
        Lista słówek w tej kategorii ({length}){' '}
        <p>
          możesz wybrać kolejność listy: -od najstarszego, -od najmłodzego,
          -alfabetycznie
        </p>
      </p>
      <div className='grid'>
        {cards.map(card => (
          <CardItem key={card.id} card={card} categoryName={categoryName} />
        ))}
      </div>
    </div>
  );
};

export default styled(ListOfCard)`
  background-color: green;
  padding: 10px;
  width: 90%;

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-row-gap: 20px;
  }

  .text {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;
