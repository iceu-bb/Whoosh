import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { useSpring, animated } from 'react-spring';

const Header = ({ className }) => {
  const [moved, set] = useState(false);

  useEffect(() => {
    // use WAYPOINT here
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

  console.log(moved);
  return (
    <header className={className} moved={moved}>
      <animated.div
        className='animated'
        style={{
          transform: x.interpolate(x => `translate3d(${-1 * x}%,0,0)`)
        }}
      />

      <Link to='/' className={moved ? 'logo yellow' : 'logo '} moved={moved}>
        Fiszki
      </Link>
      <Nav moved={moved} />
    </header>
  );
};

export default styled(Header)`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #eee;
  color: #fff;

  .animated {
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
  }

  .logo {
    display: inline-block;
    font-size: 2.5rem;
    font-weight: 500;
    text-decoration: none;
    color: inherit;
    padding: 10px;
    z-index: 30;
    transition: all 0.3s ease 0.1s;
  }

  .yellow {
    color: red;
  }
`;
