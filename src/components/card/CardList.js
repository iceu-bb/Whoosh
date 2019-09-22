import React from 'react';
import styled from 'styled-components';
import CardListItem from './CardListItem';
import { Paragraph } from '../elements';

const ListOfCard = ({ className, cards, length, categoryName }) => {
  return (
    <div className={className}>
      <div className='container'>
        <Paragraph modifiers={['feature', 'fontBig', 'margin']}>
          Lista słówek w tej kategorii ({length})
        </Paragraph>
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
  padding: 20px 0;

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
`;
