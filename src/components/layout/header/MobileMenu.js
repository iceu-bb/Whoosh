import React, { useState } from 'react';
import styled from 'styled-components';
import { below } from '../../../utilities';
import MenuMobileInner from './MobileMenuInner';

const MobileMenu = ({ className }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className={className}>
      <button onClick={() => setMenuOpen(!isMenuOpen)}>MENU</button>
      {isMenuOpen && (
        <MenuMobileInner setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
      )}
    </div>
  );
};

export default styled(MobileMenu)`
  font-size: 3rem;
  color: inherit;
  padding: 20px;
  position: relative;
  z-index: 30;
  cursor: pointer;

  .menu-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    z-index: 100;
  }
`;
