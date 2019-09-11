import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const FlashCard = ({ className }) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <div className={className} onClick={() => set(!flipped)}>
      <animated.div
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
        className='side front'
      >
        Front
      </animated.div>
      <animated.div
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
        className='side back'
      >
        Back
      </animated.div>
    </div>
  );
};

export default styled(FlashCard)`
  padding: 200px;
  background-color: pink;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

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
