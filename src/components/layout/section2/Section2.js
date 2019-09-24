import React, { useState, memo } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated, config } from 'react-spring';
import { HeadingH2, Paragraph } from '../../elements';
import { below } from '../../../utilities';

const Section2 = memo(({ className }) => {
  const [on, toggle] = useState(false);
  const [on2, toggle2] = useState(false);
  const animation1 = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? 'translate3d(0,0,0)' : 'translate3d(-50%,0,0)',
    config: config.slow
  });
  const animation2 = useSpring({
    opacity: on2 ? 1 : 0,
    transform: on2 ? 'translate3d(0,0,0)' : 'translate3d(50%,0,0)',
    config: config.slow
  });

  return (
    <section className={className}>
      <div className='container'>
        <Waypoint bottomOffset='20%' onEnter={() => toggle(true)}>
          <animated.div style={animation1} className='text first'>
            <HeadingH2>Ucz się lepiej</HeadingH2>
            <Paragraph modifiers='feature'>
              Ponad 90% uczniów korzystających z Whoosh zgłasza poprawę swoich
              ocen szkolnych. Zobacz w jaki sposób proste narzędzia Whoosh mogą
              pomóc Ci w nauce angielskiego na każdym etapie edukacji, zarówno w
              podstawówce jak i w skzole wyższej.
            </Paragraph>
          </animated.div>
        </Waypoint>
        <div className='image second'></div>
        <div className='image third'></div>
        <Waypoint bottomOffset='20%' onEnter={() => toggle2(true)}>
          <animated.div style={animation2} className='text fourth'>
            <HeadingH2>Podziel się wiedzą</HeadingH2>
            <Paragraph modifiers='feature'>
              Dzięki Whoosh będziesz bardziej zaangażowany i zmotywowany. Twórz
              swoje własne zestawy słówek, współpracuj z innymi uczniami,
              obracaj fiszki by uczyć się w bardziej zabawny i efektywny sposób.
            </Paragraph>
          </animated.div>
        </Waypoint>
      </div>
    </section>
  );
});

export default styled(Section2)`
  padding: 100px 0;
  background-color: #eee;
  font-size: 1.8rem;
  ${below.small`
      padding: 30px 0;
     `}

  .container {
    max-width: 850px;
    margin: 0 auto;
    padding: 0 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(8, 85px);
    grid-column-gap: 40px;
    grid-row-gap: 30px;
    ${below.small`
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      text-align: center;
      grid-row-gap: 50px;
      padding: 0 20px;
     `}
  }

  .text {
    margin: 0 auto;
    text-align: center;
  }

  .image {
    background-color: teal;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 250px;
    ${below.small`
      min-height: 350px;
      width: 400px;
      margin: 0 auto;
    `}
    ${below.phone`
      min-height: 350px;
      max-width: 90vw;
      margin: 0 auto;
    `}
  }

  .first {
    grid-area: 1/1/4/2;
    padding: 0 75px 60px 0;
    text-align: right;
    ${below.smallMed`
        padding: 0 45px 30px 0;
    `};
    ${below.small`
      grid-area: 1/1/2/2;
      text-align: center;
      padding: 0;
    `}
  }

  .second {
    grid-area: 1/2/6/3;
    background-image: url('../assets/img-4.jpg');
    ${below.small`
      grid-area: 2/1/3/2;
    `}
  }

  .third {
    grid-area: 4/1/9/2;
    background-image: url('../assets/img-3.jpg');
    ${below.small`
      grid-area: 4/1/5/2;
    `}
  }

  .fourth {
    grid-area: 6/2/9/3;
    padding: 60px 0 0 75px;
    ${below.smallMed`
        padding: 30px 0 0 45px;
    `};
    ${below.small`
      grid-area: 3/1/4/2;
      padding: 0;
    `}
  }
`;
