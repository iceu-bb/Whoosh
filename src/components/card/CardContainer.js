import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HeadingH3 } from '../elements';
import ButtonsContainer from './ButtonsContainer';
import CardList from './CardList';
import AddCard from './AddCard';
import Wave from '../layout/wave/Wave';
import CardSummary from './CardSummary';
import CategoryContainer from '../category/CategoriesContainer';
import FlashcardContainer from './FlashcardContainer';

const CardContainer = ({
  className,
  cards,
  categoryName,
  categories,
  userId,
  isLoading
}) => {
  const [randomCategories, setRandomCategories] = useState([]);
  useEffect(() => {
    if (categories.length > 0) {
      // filter out categories created by currnet user and current category, then pick 3 catrgories from random list
      const filteredCategories = categories
        .filter(
          category =>
            category.authorId !== userId && category.name !== categoryName
        )
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setRandomCategories([...filteredCategories]);
    }
  }, []);

  // index of current Card
  const [index, setIndex] = useState(0);

  return (
    <div className={className}>
      <HeadingH3 modifiers='big'>{categoryName}</HeadingH3>
      {cards.length > 0 ? (
        <>
          <FlashcardContainer cards={cards} index={index} setIndex={setIndex} />
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
        </>
      ) : (
        !isLoading && (
          <div style={{ margin: 50, textAlign: 'center', fontSize: '3rem' }}>
            Zestaw jest pusty !
          </div>
        )
      )}

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
`;
