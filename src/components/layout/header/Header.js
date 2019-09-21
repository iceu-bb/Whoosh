import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { useSpring, animated } from 'react-spring';
import { orange, below } from '../../../utilities';

const Header = ({ className }) => {
  const [moved, set] = useState(false);

  const myRef = useRef(null);
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    window.addEventListener('scroll', OnScroll);
    return () => {
      window.removeEventListener('scroll', OnScroll);
    };
  }, []);

  const OnScroll = () => {
    if (window.pageYOffset > 80) {
      set(true);
    } else {
      set(false);
    }
  };

  const { x } = useSpring({
    x: moved ? 0 : 100
  });

  return (
    <header className={className} moved={moved}>
      <div ref={myRef} className='container'>
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
        >
          Whoosh
        </Link>
        <Nav moved={moved} />
      </div>
    </header>
  );
};

export default styled(Header)`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: transparent;
  border-bottom: 1px solid #eee;
  z-index: 20;
  ${below.medium`
      height: 70px;
  `}
  /* ${below.small`
      height: 60px;
  `} */

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
      padding: 0 30px 0 20px;
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
  }

  .yellow {
    color: ${orange};
  }
`;
