import React from 'react';
import styled from 'styled-components';
import CardListItem from './CardListItem';

const ListOfCard = ({ className, cards, length, categoryName }) => {
  return (
    <div className={className}>
      <div className='container'>
        <p className='text'>
          Lista słówek w tej kategorii ({length - 1})
          <p>
            możesz wybrać kolejność listy: -od najstarszego, -od najmłodzego,
            -alfabetycznie
          </p>
        </p>
        <div className='grid'>
          {cards.map(card => (
            <CardListItem
              key={card.id}
              card={card}
              categoryName={categoryName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default styled(ListOfCard)`
  background-color: #eee;
  padding: 60px 0 100px;

  .container {
    margin: 0 auto;
    padding: 10px;
    max-width: 1200px;
  }

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
