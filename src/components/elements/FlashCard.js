import React, { useState } from 'react';
import styled from 'styled-components';
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
  position: relative;

  .side {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 250px;
    position: absolute;
    cursor: pointer;
    will-change: transform, opacity;
  }

  .front {
    background-color: yellow;
  }

  .back {
    background-color: salmon;
  }
`;
