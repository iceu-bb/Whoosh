import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { boxShadow2, below } from '../../utilities';
import { useSpring, animated } from 'react-spring';
import { throttled } from '../../helpers';

const FlashCard = ({ className, english, polish, key, style }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    window.addEventListener('keyup', throttledHandleKeyPress);
    return () => {
      window.removeEventListener('keyup', throttledHandleKeyPress);
    };
  }, []);

  const handleKeyPress = ({ key }) => {
    key === 'Control' && setFlipped(state => !state);
  };
  const throttledHandleKeyPress = throttled(200, handleKeyPress);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <animated.div className={className} style={style} key={key}>
      <animated.div
        className='side'
        onClick={() => setFlipped(!flipped)}
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        {english}
      </animated.div>
      <animated.div
        className='side'
        onClick={() => setFlipped(!flipped)}
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
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
  will-change: transform;

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
