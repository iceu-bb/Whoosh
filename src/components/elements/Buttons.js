import styled from 'styled-components';
import { orange, black } from '../../utilities';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  white: () => `
  background-color: #FCECDA;
  color: ${black};
  `,
  nav: () => `
  padding: 15px 25px;
  border: 1px solid white;
  background:rgba(255,255,255,.2);

  &:hover {
    background: #FFB300;
    border: 1px solid #FFB300;
    filter: none;
  }`
};

export const Button = styled.button`
  padding: 10px 15px;
  background: ${orange};
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    filter: grayscale(20%);
  }

  &:disabled {
    filter: grayscale(80%);
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const CloseButton = styled.button`
  color: #fff;
  font-size: 20px;
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
