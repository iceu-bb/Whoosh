import React from 'react';
import styled from 'styled-components';
import { useTransition, config } from 'react-spring';
import { below } from '../../utilities';
import { FlashCard } from '../elements';

const CardContainer = styled.div`
    margin: 0 auto;
    height: 300px;
    width: 500px;

    ${below.smallMed`
    width: 400px;
  `}
    ${below.small`
    height: 250px;
    width: 350px;
  `}
   ${below.phone`
    height: 200px;
    width: 275px;
  `}
   ${below.ultraSmallPhone`
    height: 180px;
    width: 250px;
  `}

`;

const FlashcardContainer = ({ cards, index }) => {
  const transitions = useTransition(cards[index], item => item.id, {
    from: {
      position: 'absolute',
      opacity: 0,
      transform: `translate3d(50px, 3px, 0)`
    },
    enter: {
      position: 'absolute',
      opacity: 1,
      transform: `translate3d(0, 0, 0)`
    },
    leave: {
      position: 'absolute',
      opacity: 0,
      transform: `translate3d(-50px, 3px, 0)`
    },
    config: config.gentle
  });

  return (
    <CardContainer>
      {cards.length !== 0 &&
        transitions.map(({ item, key, props: animation }) => (
          <FlashCard
            key={key}
            style={animation}
            polish={item.polish}
            english={item.english}
          />
        ))}
    </CardContainer>
  );
};

export default FlashcardContainer;
