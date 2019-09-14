import React, { useState } from 'react';
import styled from 'styled-components';
import { useTransition, config } from 'react-spring';
import { FlashCard, HeadingH3 } from '../elements';
import ButtonsContainer from './ButtonsContainer';
import CardList from './CardList';
import AddCard from './AddCard';

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
      <section style={{ padding: 200 }}>
        Ta kategoria istnieje od ... dni. Pod spodem możesz dodać słówko do tej
        kategorii bądź usunąć to które wcześniej stworzyłeś :)
      </section>
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
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-container {
    height: 250px;
    width: 400px;
  }
`;
