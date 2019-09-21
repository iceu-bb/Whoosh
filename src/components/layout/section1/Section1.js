import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Button,
  HeadingH2,
  HeadingH3,
  HeadingH4,
  Paragraph
} from '../../elements';
import { boxShadow2, below } from '../../../utilities';
import { FaTabletAlt, FaBolt, FaPlane, FaBook } from 'react-icons/fa';

const Section1 = ({ className }) => {
  return (
    <div className={className}>
      <HeadingH3>Nasza oferta</HeadingH3>
      <HeadingH2>Whoosh Firma i Misja</HeadingH2>
      <div className='text-container'>
        <Paragraph modifiers='feature'>
          Witaminy w Whoosh, jednej z największcyh w Polsce społeczności
          e-learningowych. Każdego miesiąca ponad 6 tysięcy aktywnych
          użytkowników ćwiczy i uczy sie ponad 20 tysięcy zestawów do nauki.
        </Paragraph>
        <Paragraph modifiers='feature'>
          Naszą misja jest prosta, pomagać uczniom ćwiczyć i doskonalić swój
          język angielski. Whoosh dostarcza angażujące aktywności dzięki którym
          nauka słownictwa staje się prosta i przyjemna.
        </Paragraph>
      </div>
      <div className='feature-container'>
        <div className='feature-item'>
          <FaTabletAlt />
          <HeadingH4>Responywna platforma</HeadingH4>
        </div>
        <div className='feature-item'>
          <FaPlane />
          <HeadingH4>Ucz się w podróży</HeadingH4>
        </div>
        <div className='feature-item'>
          <FaBook />
          <HeadingH4>Popraw wyniki w nauce</HeadingH4>
        </div>
        <div className='feature-item'>
          <FaBolt />
          <HeadingH4>Bezproblemowa synchronizacja</HeadingH4>
        </div>
      </div>
      <Button to='/user/faq' as={Link}>
        Czytaj więcej
      </Button>
    </div>
  );
};

export default styled(Section1)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0 100px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.5px solid #ddd;

  .text-container {
    max-width: 600px;
    text-align: center;
    ${below.small`
      padding: 0 15px;
    `};
  }

  .feature-container {
    margin: 50px 0;
    display: grid;
    max-width: 90vw;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 30px;
    justify-content: center;
    ${below.medium`
    grid-column-gap: 15px;
    `};
    ${below.smallMed`
     grid-template-columns: repeat(2, 1fr);
     grid-column-gap: 30px;
    `};
    ${below.small`
      grid-column-gap: 15px;
      grid-row-gap: 15px;
    `};
  }

  .feature-item {
    height: 200px;
    max-width: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 25px;
    ${boxShadow2};

    ${below.small`
     max-height: 170px;
    `};
    ${below.ultraSmallPhone`
     max-height: 150px;
    `}

    & > svg {
      font-size: 4rem;
      margin-bottom: 18px;
      fill: orange;
    }
  }
`;
