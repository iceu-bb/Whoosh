import styled from 'styled-components';
import { orange, black, gradientMain } from '../../utilities';
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

  transition: all 0.2s ease;

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

  &:hover {
    background-color: #ffb300;
  }
`;

export const IconButton = styled(CloseButton)`
  background-color: orange;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  line-height: 50px;
`;

export const SearchIcon = styled(CloseButton)`
  font-size: 1.5rem;
  width: 30px;
  height: 30px;
  line-height: 50px;
`;
