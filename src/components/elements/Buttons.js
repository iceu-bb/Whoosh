import styled from 'styled-components';
import { orange } from '../../utilities';
import { applyStyleModifiers } from 'styled-components-modifiers';

export const Button = styled.button`
  padding: 10px 15px;
  background: ${orange};
  color: #fff;
  font-size: 2rem;
  border: none;
  border-radius: 7px;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    filter: grayscale(20%);
  }
`;
