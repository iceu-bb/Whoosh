import React from 'react';
import { useLockBodyScroll } from '../../../helpers';

const MobileMenuInner = ({ setMenuOpen, isMenuOpen }) => {
  useLockBodyScroll();
  return (
    <div className='menu-container'>
      <button onClick={() => setMenuOpen(!isMenuOpen)}>X</button>
    </div>
  );
};

export default MobileMenuInner;
