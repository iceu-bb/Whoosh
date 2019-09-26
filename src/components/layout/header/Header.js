import React, { useState, useRef, memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { useSpring, animated } from 'react-spring';
import { orange, below } from '../../../utilities';
import { scrollToRef } from '../../../helpers';
import { Waypoint } from 'react-waypoint';

const FakePixel = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  background-color: transparent;
  top: 80px;
  left: 5px;
`;

const Header = memo(({ className }) => {
  const [moved, setMoved] = useState(false);

  const scrollRef = useRef(null);
  const executeScroll = () => scrollToRef(scrollRef);

  const { x } = useSpring({
    x: moved ? 0 : 100
  });

  return (
    <>
      <Waypoint onEnter={() => setMoved(false)} onLeave={() => setMoved(true)}>
        <FakePixel />
      </Waypoint>
      <header className={className}>
        <div ref={scrollRef} className='container'>
          <animated.div
            className='animated'
            style={{
              transform: x.interpolate(x => `translate3d(${-1 * x}%,0,0)`)
            }}
          />
          <Link
            onClick={executeScroll}
            to='/'
            className={moved ? 'logo yellow' : 'logo '}
            aria-label='Home'
          >
            Whoosh
          </Link>
          <Nav moved={moved} />
        </div>
      </header>
    </>
  );
});

export default styled(Header)`
  position: fixed;
  width: 100vw;
  height: 80px;
  background-color: transparent;
  border-bottom: 1px solid #eee;
  z-index: 20;
  ${below.medium`
      height: 70px;
      padding-left: 2%;
  `}

  .container {
    max-width: 1800px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    ${below.smallMed`
      justify-content: space-between;
    `}
  }

  .animated {
    height: 100%;
    width: 100%;
    background-color: rgba(255, 242, 238, 0.93);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    will-change: transform;
  }

  .logo {
    display: inline-block;
    font-size: 3.5rem;
    font-weight: 400;
    letter-spacing: 3px;
    text-decoration: none;
    color: inherit;
    padding: 10px;
    z-index: 30;
    transition: all 0.3s ease 0.1s;
    ${below.medium`
      font-size: 3rem;
    `}
    ${below.phone`
      font-size: 2.5rem;
      font-weight: bold;
    `}
     ${below.ultraSmallPhone`
      padding: 10px 5px;
    `}
  }

  .yellow {
    color: ${orange};
  }
`;
