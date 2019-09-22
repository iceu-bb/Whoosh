import React, { useState } from 'react';
import styled from 'styled-components';
import { boxShadow2, below } from '../../utilities';
import { useSpring, animated } from 'react-spring';

const FlashCard = ({ className, english, polish, key, style }) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <animated.div className={className} style={style} key={key}>
      <animated.div
        onClick={() => set(!flipped)}
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
        className='side front'
      >
        {english}
      </animated.div>
      <animated.div
        onClick={() => set(!flipped)}
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
        className='side back'
      >
        {polish}
      </animated.div>
    </animated.div>
  );
};

export default styled(FlashCard)`
  width: 500px;
  height: 300px;
  font-size: 3rem;

  ${below.smallMed`
    width: 400px;
    font-size: 2.8rem;
  `}
  ${below.small`
    width: 350px;
    height: 250px;
    font-size: 2.6rem;
  `}
   ${below.phone`
    height: 200px;
    width: 275px;
    font-size: 2.4rem;
  `}
  ${below.ultraSmallPhone`
    height: 180px;
    width: 250px;
    font-size: 2.2rem;
  `}

  .side {
    background-color: #fff;
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    top: 0;
    backface-visibility: hidden;
    border: 0.5px solid #eee;
    border-radius: 5px;
    ${boxShadow2};
    white-space: normal;
    overflow-wrap: break-word;
    word-break: normal;

    will-change: transform, opacity;
  }
`;
