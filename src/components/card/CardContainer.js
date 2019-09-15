import React, { useState } from 'react';
import styled from 'styled-components';
import { useTransition, config } from 'react-spring';
import { FlashCard, HeadingH3 } from '../elements';
import ButtonsContainer from './ButtonsContainer';
import CardList from './CardList';
import AddCard from './AddCard';
import Wave from '../layout/Wave';
import CardSummary from './CardSummary';

const CardContainer = ({ cards, categoryName, className }) => {
  // index of current Card
  const [index, setIndex] = useState(0);

  const transitions = useTransition(cards[index], item => item.id, {
    from: {
      position: 'absolute',
      opacity: 0,
      transform: `translate3d(150px, 0, 0)`
    },
    enter: {
      position: 'absolute',
      opacity: 1,
      transform: `translate3d(0, 0, 0)`
    },
    leave: {
      position: 'absolute',
      opacity: 0,
      transform: `translate3d(-50px, 0, 0)`
    },
    config: config.gentle
  });
  return (
    <div className={className}>
      <HeadingH3 modifiers='big'>{categoryName}</HeadingH3>
      <div className='card-container'>
        {cards.length !== 0 &&
          transitions.map(({ item, key, props: animation }) => (
            <FlashCard
              key={key}
              style={animation}
              polish={item.polish}
              english={item.english}
            />
          ))}
      </div>
      <ButtonsContainer
        setIndex={setIndex}
        index={index}
        length={cards.length}
      />
      <Wave trend='down' />
      <CardSummary categoryName={categoryName} />
      <AddCard categoryName={categoryName} />
      <CardList
        cards={cards}
        length={cards.length}
        categoryName={categoryName}
      />
    </div>
  );
};

export default styled(CardContainer)`
  background-color: #fff;
  padding: 100px 0;

  &:first-child {
    text-align: center;
  }

  .card-container {
    margin: 0 auto;
    height: 300px;
    width: 500px;
  }
`;
