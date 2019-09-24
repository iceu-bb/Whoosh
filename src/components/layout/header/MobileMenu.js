import React, { useState, useRef, memo } from 'react';
import styled from 'styled-components';
import { useSpring, config } from 'react-spring';
import { CloseButtonMenu } from '../../elements';
import { below } from '../../../utilities';
import MenuMobileInner from './MobileMenuInner';
import { FaBuffer } from 'react-icons/fa';

const MobileMenu = memo(({ className, moved }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const springRef = useRef();
  const { x } = useSpring({
    x: isMenuOpen ? 0 : 100,
    config: config.stiff
  });

  return (
    <div className={className}>
      <CloseButtonMenu front={true} onClick={() => setMenuOpen(!isMenuOpen)}>
        <FaBuffer />
      </CloseButtonMenu>
      <MenuMobileInner
        x={x}
        setMenuOpen={setMenuOpen}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
});

export default styled(MobileMenu)`
  color: inherit;
  z-index: 40;
  position: fixed;
  cursor: pointer;
  top: 15px;
  right: 30px;

  & > button {
    border: ${({ moved }) => (moved ? '2px solid orange' : '2px solid #fff')};
    color: ${({ moved }) => (moved ? 'orange' : '#fff')};
  }
`;
