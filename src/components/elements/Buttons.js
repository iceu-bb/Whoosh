import styled from 'styled-components';
import { orange, black, boxShadow1, below } from '../../utilities';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  white: () => `
  font-size: 1.4rem;
  background-color: #FCECDA;
  color: ${black};
  `,
  nav: () => `
  border: 1px solid white;
  background:rgba(255,255,255,.2);
  position: relative;
  z-index: 30;

  &:hover {
    background: ${orange};
    border: 1px solid ${orange};
  }`
};

export const Button = styled.button`
  padding: 15px 25px;
  background: ${orange};
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  ${boxShadow1};
  transition: all 0.2s ease;

  ${below.small`
    padding: 15px 20px;
  `};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    filter: grayscale(80%);
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const CloseButton = styled.button`
  color: #fff;
  font-size: 1.8rem;
  background: inherit;
  border: 2px solid #ccc;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffb300;
  }

  :active,
  :focus {
    outline: none;
  }
`;

export const CloseButtonMenu = styled(CloseButton)`
  color: #ccc;
  font-size: 1.8rem;
  background: inherit;
  border: 2px solid #ccc;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease 0.2s;

  &:hover {
    background-color: inherit;
  }
`;

const ICON_BUTTON_MODIFIERS = {
  small: () => `
    height: 40px;
    width: 40px;
    line-height:40px;
    font-size: 1.8rem;
    transition: all 0.2s ease;

    &:hover {
      background-color: #fff;
      border: 2px solid red;
    }
  `,
  red: () => `
  background-color: #fff;
  color: red;
  `,
  positioned: () => `
    position: absolute;
    bottom: 10px;
    right: 20px;
  `
};

export const IconButton = styled(CloseButton)`
  background-color: orange;
  font-size: 1.9rem;
  width: 45px;
  height: 45px;
  line-height: 45px;

  ${below.small`
    width: 38px;
    height: 38px;
    line-height: 38px;
  `};

  ${applyStyleModifiers(ICON_BUTTON_MODIFIERS)}
`;

export const SearchIcon = styled(CloseButton)`
  font-size: 1.5rem;
  width: 30px;
  height: 30px;
  line-height: 50px;
`;
