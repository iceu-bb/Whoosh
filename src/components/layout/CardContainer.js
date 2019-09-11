import React, { useState } from 'react';
import { useTransition, animated, config } from 'react-spring';
import { FlashCard } from '../elements';
import ButtonsContainer from './ButtonsContainer';

const cards = [
  { id: 0, polish: 'Jabłko', english: 'Apple' },
  { id: 1, polish: 'Śliwka', english: 'Plum' },
  { id: 2, polish: 'Gruszka', english: 'Pear' },
  { id: 3, polish: 'Arbuz', english: 'Watermelon' }
];

const CardContainer = () => {
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
    <div
      style={{
        margin: '0 auto',
        width: '800px'
      }}
    >
      <div>Nazwa kategorii</div>
      <div
        style={{
          height: '300px'
        }}
      >
        {transitions.map(({ item, key, props: animation }) => (
          <FlashCard
            key={key}
            style={animation}
            polish={item.polish}
            english={item.english}
          />
        ))}
      </div>
      <ButtonsContainer setIndex={setIndex} index={index} />
      <div>Przyciski do zmiany karty</div>
    </div>
  );
};

export default CardContainer;
