import React, { useState } from 'react';
import styled from 'styled-components';
import { useTransition, config } from 'react-spring';
import { FlashCard, HeadingH3 } from '../elements';
import ButtonsContainer from './ButtonsContainer';
import CardList from './CardList';
import AddCard from './AddCard';
import { below } from '../../utilities';
import Wave from '../layout/wave/Wave';
import CardSummary from './CardSummary';
import CategoryContainer from '../category/CategoriesContainer';

const CardContainer = ({
  className,
  cards,
  categoryName,
  categories,
  userId
}) => {
  // index of current Card
  const [index, setIndex] = useState(0);

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

  let randomCategories = [];
  if (categories.length > 0) {
    // filter out categories created by currnet user and current category, then pick 3 catrgories from random list
    const filteredCategories = categories
      .filter(
        category =>
          category.authorId !== userId && category.name !== categoryName
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    randomCategories = [...filteredCategories];
  }

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
      <CategoryContainer
        categories={randomCategories}
        showTitle='Być może zainteresują cię również'
        message='Weird problem'
      />
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
  padding: 100px 0 0;

  &:first-child {
    text-align: center;
  }

  .card-container {
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
  }
`;
