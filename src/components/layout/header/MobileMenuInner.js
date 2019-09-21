import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { CloseButtonMenu } from '../../elements';
import MobileMenuList from './MobileMenuList';
import { FaTimes } from 'react-icons/fa';

const MobileMenuInner = ({ className, x, setMenuOpen, isMenuOpen }) => {
  return (
    <animated.div
      className={className}
      style={{
        transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
      }}
    >
      <div>
        <CloseButtonMenu
          className='close-button'
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <FaTimes />
        </CloseButtonMenu>
        {isMenuOpen && <MobileMenuList />}
      </div>
    </animated.div>
  );
};

export default styled(MobileMenuInner)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #fff;

  .close-button {
    position: absolute;
    top: 15px;
    right: 38px;
  }
`;
