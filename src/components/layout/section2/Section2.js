import React from 'react';
import styled from 'styled-components';
import { HeadingH2, Paragraph } from '../../elements';

const Section2 = ({ className }) => {
  return (
    <section className={className}>
      <div className='container'>
        <div className='text first'>
          <HeadingH2>Ucz się lepiej</HeadingH2>
          <Paragraph modifiers='feature'>
            Ponad 90% uczniów korzystających z Whoosh zgłasza poprawę swoich
            ocen szkolnych. Zobacz w jaki sposób proste narzędzia Whoosh mogą
            pomóc Ci w nauce angielskiego na każdym etapie edukacji, zarówno w
            podstawówce jak i w skzole wyższej.
          </Paragraph>
        </div>
        <div className='image second'></div>
        <div className='image third'></div>
        <div className='text fourth'>
          <HeadingH2>Podziel się wiedzą</HeadingH2>
          <Paragraph modifiers='feature'>
            Dzięki Whoosh będziesz bardziej zaangażowany i zmotywowany. Twórz
            swoje własne zestawy słówek, współpracuj z innymi uczniami, obracaj
            fiszki by uczyć się w bardziej zabawny i efektywny sposób.
          </Paragraph>
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
    max-width: 850px;
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .first {
    grid-area: 1/1/4/2;
    padding-bottom: 60px;
    padding-right: 75px;
    text-align: right;
  }

  .second {
    grid-area: 1/2/6/3;
    background-image: url('../assets/img-4.jpg');
  }

  .third {
    grid-area: 4/1/9/2;
    background-image: url('../assets/img-3.jpg');
  }

  .fourth {
    grid-area: 6/2/9/3;
    padding-top: 60px;
    padding-left: 75px;
  }
`;
