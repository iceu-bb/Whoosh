import React from 'react';
import styled from 'styled-components';
import { HeadingH2 } from '../../elements';

const Section2 = ({ className }) => {
  return (
    <section className={className}>
      <div className='container'>
        <div className='text first'>
          <HeadingH2>Ucz się lepiej</HeadingH2>
          Ucz się lepiej Ponad 90% uczniów korzystających z Quizlet zgłasza
          poprawę swoich ocen szkolnych. Zobacz w jaki sposób proste narzędzia
          Quizlet mogą pomóc Ci w nauce dowolnego materiału, od algebry,
          historii Polski w szkole średniej, a nawet ekonometrii w szkole
          wyższej.
        </div>
        <div className='image second'>IMG</div>
        <div className='image third'>IMG</div>
        <div className='text fourth'>
          <HeadingH2>Podziel się wiedzą</HeadingH2>
          Podziel się wiedzą Dzięki Quizlet sprawisz, że Twoi uczniowie będą
          zaangażowani i zmotywowani. Twórz swoje własne zestawy klasowe,
          współpracuj z innymi nauczycielami, graj w Quizlet Live i organizuj
          swoim uczniom materiały, aby pomóc im w nauce w bardziej zabawny i
          efektywny sposób.
        </div>
      </div>
    </section>
  );
};

export default styled(Section2)`
  padding: 100px 0;
  background-color: #eee;
  font-size: 1.8rem;

  .container {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(8, 85px);
    grid-column-gap: 40px;
    grid-row-gap: 30px;
  }

  .text {
  }

  .image {
    background-color: teal;
  }

  .first {
    grid-area: 1/1/4/2;
    padding-bottom: 60px;
    padding-right: 75px;
    text-align: right;
  }

  .second {
    grid-area: 1/2/6/3;
  }

  .third {
    grid-area: 4/1/9/2;
  }

  .fourth {
    grid-area: 6/2/9/3;
    padding-top: 60px;
    padding-left: 75px;
  }
`;
